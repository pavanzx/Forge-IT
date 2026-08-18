import * as React from "react";

export type AdventureModule355Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule355({label="Forge-IT module",active=true,onAction}:AdventureModule355Props) {
  return <section data-module="355" data-active={active} aria-label={label} className="generated-module generated-module-355">
    <div className="generated-module__hud"><span>MODULE 355</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
