// Cross-component signal: which way the reader is turning. The nav buttons set
// this on click; the page template reads it when it (re)mounts on navigation.
// Peek-style (no consume) so it survives React StrictMode's dev double-mount.
export type PageDir = 1 | -1;

let current: PageDir = 1;

export function setPageDirection(direction: PageDir) {
  current = direction;
}

export function pageDirection(): PageDir {
  return current;
}
