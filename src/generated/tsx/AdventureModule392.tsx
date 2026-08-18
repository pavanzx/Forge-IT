import * as React from "react";

export type AdventureModule392Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule392({label="Forge-IT module",active=true,onAction}:AdventureModule392Props) {
  return <section data-module="392" data-active={active} aria-label={label} className="generated-module generated-module-392">
    <div className="generated-module__hud"><span>MODULE 392</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
