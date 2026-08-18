import * as React from "react";

export type AdventureModule407Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule407({label="Forge-IT module",active=true,onAction}:AdventureModule407Props) {
  return <section data-module="407" data-active={active} aria-label={label} className="generated-module generated-module-407">
    <div className="generated-module__hud"><span>MODULE 407</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
