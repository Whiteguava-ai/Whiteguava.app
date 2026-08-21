'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Ashima Arts simplex noise (MIT/public-domain, the standard GLSL noise used
// across the WebGL ecosystem) — drives the vertex displacement below so the
// surface is a constantly flowing, unrepeating mass rather than a static
// primitive like a sphere or icosahedron.
const NOISE_GLSL = /* glsl */ `
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  varying vec3 vNormal;
  varying float vNoise;

  ${NOISE_GLSL}

  void main() {
    vec3 orthoA = normalize(cross(normal, vec3(0.0, 1.0, 0.4)));
    vec3 orthoB = normalize(cross(normal, orthoA));
    float eps = 0.02;

    float n0 = snoise(position * uFreq + uTime);
    float n1 = snoise((position + orthoA * eps) * uFreq + uTime);
    float n2 = snoise((position + orthoB * eps) * uFreq + uTime);

    vec3 d0 = position + normal * n0 * uAmp;
    vec3 d1 = (position + orthoA * eps) + normal * n1 * uAmp;
    vec3 d2 = (position + orthoB * eps) + normal * n2 * uAmp;

    vec3 newNormal = normalize(cross(d1 - d0, d2 - d0));
    vNormal = normalize(normalMatrix * newNormal);
    vNoise = n0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(d0, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying float vNoise;

  void main() {
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    float fresnel = pow(1.0 - clamp(abs(dot(vNormal, viewDir)), 0.0, 1.0), 2.4);
    vec3 base = mix(uColorA, uColorB, clamp(vNoise * 0.5 + 0.5, 0.0, 1.0) * 0.5);
    vec3 color = base + fresnel * uColorB * 1.6;
    gl_FragColor = vec4(color, uOpacity);
  }
`;

interface OrganicCoreProps {
  /** Local scene progress (0-1), read every frame via a ref — not React state. */
  progressRef: React.MutableRefObject<number>;
  radius?: number;
  detail?: number;
  colorA?: string;
  colorB?: string;
  freq?: number;
  maxAmp?: number;
  /** Progress range within which the core reveals (fades/grows in). */
  revealStart?: number;
  revealEnd?: number;
  rotationSpeed?: number;
}

/**
 * A single recurring visual motif — a noise-displaced, fresnel-lit organic
 * energy mass, not a static geometric primitive — reused (at different
 * scales/amplitudes) across the Void, World Forms, Technology Core, and Final
 * CTA scenes so the whole arc reads as one thing evolving, not four separate
 * shapes bolted together.
 */
export default function OrganicCore({
  progressRef,
  radius = 1,
  detail = 5,
  colorA = '#141414',
  colorB = '#e63b2e',
  freq = 1.1,
  maxAmp = 0.22,
  revealStart = 0,
  revealEnd = 0.6,
  rotationSpeed = 0.1,
}: OrganicCoreProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAmp: { value: 0 },
        uFreq: { value: freq },
        uColorA: { value: new THREE.Color(colorA) },
        uColorB: { value: new THREE.Color(colorB) },
        uOpacity: { value: 0 },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      side: THREE.DoubleSide,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mutating shader uniforms and the mesh transform imperatively every frame
  // is the standard react-three-fiber pattern — driving this via setState
  // would re-render React on every animation tick instead of just pushing new
  // values to the GPU.
  /* eslint-disable react-hooks/immutability */
  useFrame((state, delta) => {
    const p = progressRef.current;
    const reveal = THREE.MathUtils.smoothstep(p, revealStart, revealEnd);
    material.uniforms.uTime.value = state.clock.elapsedTime * 0.35;
    material.uniforms.uAmp.value = THREE.MathUtils.lerp(0.02, maxAmp, reveal);
    material.uniforms.uOpacity.value = reveal;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
      meshRef.current.rotation.x += delta * rotationSpeed * 0.4;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(0.3, 1, reveal));
    }
  });
  /* eslint-enable react-hooks/immutability */

  return (
    <mesh ref={meshRef} material={material}>
      <icosahedronGeometry args={[radius, detail]} />
    </mesh>
  );
}
