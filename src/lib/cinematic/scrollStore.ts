type Listener = (progress: number) => void;

interface ScrollState {
  progress: number;
  velocity: number;
}

const state: ScrollState = { progress: 0, velocity: 0 };
const listeners = new Set<Listener>();

export function setProgress(next: number) {
  const clamped = Math.min(1, Math.max(0, next));
  state.velocity = clamped - state.progress;
  state.progress = clamped;
  listeners.forEach((fn) => fn(state.progress));
}

export function getProgress() {
  return state.progress;
}

export function getVelocity() {
  return state.velocity;
}

export function subscribe(fn: Listener) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
