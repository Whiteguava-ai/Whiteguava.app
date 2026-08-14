'use client';
import { useEffect, useRef } from 'react';
import styles from './Globe3D.module.css';

type Kind = 'land' | 'india' | 'karnataka';
type Pt = { x: number; y: number; z: number; kind: Kind };
type Ring = [number, number][];
type Polygon = Ring[];

type Topology = {
  transform: { scale: [number, number]; translate: [number, number] };
  arcs: number[][][];
  objects: {
    land: {
      geometries: Array<{
        type: 'MultiPolygon' | 'Polygon';
        arcs: number[][][] | number[][];
      }>;
    };
  };
};

const KARNATAKA = { lat: 12.97, lon: 77.59 };
const INDIA_BOX = { latMin: 6.6, latMax: 35.6, lonMin: 68.0, lonMax: 97.4 };
const KARNATAKA_BOX = { latMin: 11.5, latMax: 18.45, lonMin: 74.05, lonMax: 78.6 };

function decodeArcs(topo: Topology) {
  const [sx, sy] = topo.transform.scale;
  const [tx, ty] = topo.transform.translate;
  return topo.arcs.map((arc) => {
    const pts: [number, number][] = [];
    let x = 0;
    let y = 0;
    for (const [dx, dy] of arc) {
      x += dx;
      y += dy;
      pts.push([x * sx + tx, y * sy + ty]);
    }
    return pts;
  });
}

function mergeArcs(arcs: [number, number][][], indexes: number[]) {
  const ring: [number, number][] = [];
  for (const idx of indexes) {
    const src = idx < 0 ? arcs[~idx].slice().reverse() : arcs[idx];
    const start = ring.length ? 1 : 0;
    for (let i = start; i < src.length; i++) ring.push(src[i]);
  }
  return ring;
}

function landPolygons(topo: Topology): Polygon[] {
  const arcs = decodeArcs(topo);
  const polygons: Polygon[] = [];
  for (const geom of topo.objects.land.geometries) {
    if (geom.type === 'MultiPolygon') {
      for (const poly of geom.arcs as number[][][]) {
        polygons.push(poly.map((ring) => mergeArcs(arcs, ring)));
      }
    } else {
      polygons.push((geom.arcs as number[][]).map((ring) => mergeArcs(arcs, ring)));
    }
  }
  return polygons;
}

function rasterizeLand(polygons: Polygon[], w: number, h: number) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new Uint8Array(w * h);

  const toX = (lon: number) => ((lon + 180) / 360) * w;
  const toY = (lat: number) => ((90 - lat) / 180) * h;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#fff';

  for (const poly of polygons) {
    ctx.beginPath();
    for (const ring of poly) {
      if (ring.length < 3) continue;
      let prevX = toX(ring[0][0]);
      let prevY = toY(ring[0][1]);
      ctx.moveTo(prevX, prevY);
      for (let i = 1; i < ring.length; i++) {
        let x = toX(ring[i][0]);
        const y = toY(ring[i][1]);
        if (Math.abs(x - prevX) > w * 0.5) {
          x += x < prevX ? w : -w;
        }
        ctx.lineTo(x, y);
        prevX = x;
        prevY = y;
      }
      ctx.closePath();
    }
    ctx.fill('evenodd');
  }

  const data = ctx.getImageData(0, 0, w, h).data;
  const mask = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) mask[i] = data[i * 4] > 20 ? 1 : 0;
  return mask;
}

function inBox(lat: number, lon: number, box: { latMin: number; latMax: number; lonMin: number; lonMax: number }) {
  return lat >= box.latMin && lat <= box.latMax && lon >= box.lonMin && lon <= box.lonMax;
}

function kindAt(lat: number, lon: number): Kind {
  if (inBox(lat, lon, KARNATAKA_BOX)) return 'karnataka';
  if (inBox(lat, lon, INDIA_BOX)) return 'india';
  return 'land';
}

function toPt(lat: number, lon: number, kind: Kind): Pt {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180;
  return {
    x: Math.cos(phi) * Math.cos(theta),
    y: Math.sin(phi),
    z: Math.cos(phi) * Math.sin(theta),
    kind,
  };
}

function sampleLand(
  mask: Uint8Array,
  mw: number,
  mh: number,
  latMin: number,
  latMax: number,
  lonMin: number,
  lonMax: number,
  latStep: number,
  lonScale: number,
  seen: Set<string>,
  points: Pt[]
) {
  for (let lat = latMin; lat <= latMax; lat += latStep) {
    const phi = (lat * Math.PI) / 180;
    const lonStep = Math.max(0.35, latStep / Math.max(0.22, Math.cos(phi)) * lonScale);
    for (let lon = lonMin; lon <= lonMax; lon += lonStep) {
      const key = `${lat.toFixed(2)},${lon.toFixed(2)}`;
      if (seen.has(key)) continue;
      const px = Math.min(mw - 1, Math.max(0, Math.round(((lon + 180) / 360) * mw)));
      const py = Math.min(mh - 1, Math.max(0, Math.round(((90 - lat) / 180) * mh)));
      if (!mask[py * mw + px]) continue;
      seen.add(key);
      points.push(toPt(lat, lon, kindAt(lat, lon)));
    }
  }
}

function landPoints(mask: Uint8Array, mw: number, mh: number): Pt[] {
  const points: Pt[] = [];
  const seen = new Set<string>();
  sampleLand(mask, mw, mh, -78, 82, -180, 180, 1.7, 1.2, seen, points);
  sampleLand(mask, mw, mh, INDIA_BOX.latMin, INDIA_BOX.latMax, INDIA_BOX.lonMin, INDIA_BOX.lonMax, 0.7, 0.82, seen, points);
  sampleLand(mask, mw, mh, KARNATAKA_BOX.latMin, KARNATAKA_BOX.latMax, KARNATAKA_BOX.lonMin, KARNATAKA_BOX.lonMax, 0.32, 0.55, seen, points);
  return points;
}

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = Math.PI / 2 - (KARNATAKA.lon * Math.PI) / 180;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let points: Pt[] = [];
    let ready = false;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.35;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.2;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (px: number, py: number, pz: number, rotY: number, tilt: number, r: number, cx: number, cy: number) => {
      const cy0 = Math.cos(rotY);
      const sy0 = Math.sin(rotY);
      const x = px * cy0 - pz * sy0;
      const z = px * sy0 + pz * cy0;
      const ctx_ = Math.cos(tilt);
      const stx = Math.sin(tilt);
      const y2 = py * ctx_ - z * stx;
      const z2 = py * stx + z * ctx_;
      const focal = 3.2;
      const scale = focal / (focal + z2);
      return { sx: cx + x * r * scale, sy: cy + y2 * r * scale, z: z2, scale };
    };

    const draw = () => {
      t += 0.002;
      curX += (targetX - curX) * 0.04;
      curY += (targetY - curY) * 0.04;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2 + h * 0.02;
      const r = Math.min(w, h) * 0.46;
      const rotY = t + curX;
      const tilt = 0.26 + curY;

      const glow = ctx.createRadialGradient(cx, cy, r * 0.15, cx, cy, r * 1.12);
      glow.addColorStop(0, 'rgba(255,255,255,0.04)');
      glow.addColorStop(0.62, 'rgba(229,59,46,0.06)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.12, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      ctx.arc(cx, cy, r * 0.995, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.025)';
      ctx.arc(cx, cy, r * 0.995, 0, Math.PI * 2);
      ctx.fill();

      if (ready) {
        for (const p of points) {
          const pr = project(p.x, p.y, p.z, rotY, tilt, r, cx, cy);
          if (pr.z < -0.08) continue;
          const depth = (pr.z + 1) / 2;
          let size = 1.05 + depth * 1.7 * pr.scale;
          let fill = `rgba(255,255,255,${0.22 + depth * 0.78})`;
          if (p.kind === 'india') {
            size = 1.2 + depth * 1.9 * pr.scale;
            fill = `rgba(255,196,186,${0.42 + depth * 0.55})`;
          }
          if (p.kind === 'karnataka') {
            size = 1.45 + depth * 2.1 * pr.scale;
            fill = `rgba(230,59,46,${0.55 + depth * 0.45})`;
          }
          ctx.beginPath();
          ctx.fillStyle = fill;
          ctx.arc(pr.sx, pr.sy, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const mPhi = (KARNATAKA.lat * Math.PI) / 180;
      const mTheta = (KARNATAKA.lon * Math.PI) / 180;
      const mp = project(
        Math.cos(mPhi) * Math.cos(mTheta),
        Math.sin(mPhi),
        Math.cos(mPhi) * Math.sin(mTheta),
        rotY,
        tilt,
        r,
        cx,
        cy
      );
      if (mp.z > 0) {
        const pulse = 0.55 + Math.sin(t * 4) * 0.45;
        ctx.beginPath();
        ctx.fillStyle = `rgba(230,59,46,${0.18 + pulse * 0.2})`;
        ctx.arc(mp.sx, mp.sy, 16 + pulse * 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = `rgba(230,59,46,${0.45 + pulse * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.arc(mp.sx, mp.sy, 8 + pulse * 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = '#E63B2E';
        ctx.arc(mp.sx, mp.sy, 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(mp.sx, mp.sy, 1.35, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    let cancelled = false;
    fetch('/land-110m.json')
      .then((res) => res.json())
      .then((topo: Topology) => {
        if (cancelled) return;
        const mask = rasterizeLand(landPolygons(topo), 720, 360);
        points = landPoints(mask, 720, 360);
        ready = true;
      })
      .catch(() => {
        ready = true;
      });

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={styles.halo} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
