import * as React from "react";

export type AdventureModule423Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule423({label="Forge-IT module",active=true,onAction}:AdventureModule423Props) {
  return <section data-module="423" data-active={active} aria-label={label} className="generated-module generated-module-423">
    <div className="generated-module__hud"><span>MODULE 423</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
