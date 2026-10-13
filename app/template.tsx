import type { ReactNode } from "react";

/**
 * Remounts on every route change, so the enter animation replays —
 * that's the animated page transition.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-enter">{children}</div>;
}
