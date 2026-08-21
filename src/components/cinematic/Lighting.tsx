export default function Lighting() {
  return (
    <>
      {/* Wireframe/line geometry is unlit by design (crisp, not shaded) — this
          scene only needs fog for depth cueing on the grid and distant lines. */}
      <ambientLight intensity={0.4} />
      <fog attach="fog" args={['#030305', 5, 24]} />
    </>
  );
}
