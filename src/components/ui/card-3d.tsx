'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/cn';

/**
 * Aceternity "3D Card Effect", ported to this codebase: a perspective container
 * that tracks pointer position and, via context, lets any number of child
 * `CardItem`s float at independent depths (`translateZ`) as the pointer moves.
 * No-op on touch devices — there is no mousemove to react to.
 */
const MouseContext = createContext<{
  mouseX: number;
  mouseY: number;
  setMouse: (x: number, y: number) => void;
} | null>(null);

export function CardContainer({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMouseX(x);
    setMouseY(y);
  };

  const setMouse = (x: number, y: number) => {
    setMouseX(x);
    setMouseY(y);
  };

  return (
    <MouseContext.Provider value={{ mouseX, mouseY, setMouse }}>
      <div className={cn('[perspective:1200px]', containerClassName)}>
        <div
          ref={ref}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setHovered(false);
            setMouse(0, 0);
          }}
          className={cn(
            'relative transition-transform duration-300 ease-out [transform-style:preserve-3d]',
            className
          )}
          style={{
            transform: hovered
              ? `rotateY(${mouseX * 14}deg) rotateX(${-mouseY * 14}deg) scale3d(1.01,1.01,1.01)`
              : 'rotateY(0deg) rotateX(0deg) scale3d(1,1,1)',
          }}
        >
          {children}
        </div>
      </div>
    </MouseContext.Provider>
  );
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative [transform-style:preserve-3d]', className)}>{children}</div>
  );
}

export function CardItem({
  as: Tag = 'div',
  children,
  className,
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  translateZ?: number | string;
  translateX?: number | string;
  translateY?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: unknown;
}) {
  const ctx = useContext(MouseContext);
  const mouseX = ctx?.mouseX ?? 0;
  const mouseY = ctx?.mouseY ?? 0;

  const z = typeof translateZ === 'number' ? translateZ : parseFloat(String(translateZ)) || 0;
  const driftX = mouseX * (z / 10);
  const driftY = mouseY * (z / 10);

  return (
    <Tag
      className={cn('transition-transform duration-300 ease-out [transform-style:preserve-3d]', className)}
      style={{
        transform: `translateX(calc(${translateX}px + ${driftX}px)) translateY(calc(${translateY}px + ${driftY}px)) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Reduced-motion / no-hover-capable fallback: renders children as a flat, static card. */
export function useCanHover() {
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setCanHover(mq.matches && !reduced.matches);
    update();
    mq.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      mq.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);
  return canHover;
}
