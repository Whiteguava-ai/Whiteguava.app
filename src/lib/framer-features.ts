import { domMax } from 'framer-motion';

/**
 * Re-exported in its own module so `LazyMotion`'s async `features` loader
 * (`() => import('@/lib/framer-features').then(...)`) gives the bundler a
 * real split point — domMax loads in its own chunk instead of being pulled
 * into whatever bundle happens to import framer-motion first. domMax (not
 * the smaller domAnimation) because card-hover-effect.tsx's hover glow uses
 * a shared `layoutId`, which needs layout-animation support.
 */
export default domMax;
