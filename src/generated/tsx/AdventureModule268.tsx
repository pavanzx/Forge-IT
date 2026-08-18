import * as React from "react";

export type AdventureModule268Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule268({label="Forge-IT module",active=true,onAction}:AdventureModule268Props) {
  return <section data-module="268" data-active={active} aria-label={label} className="generated-module generated-module-268">
    <div className="generated-module__hud"><span>MODULE 268</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
