import * as React from "react";

export type AdventureModule265Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule265({label="Forge-IT module",active=true,onAction}:AdventureModule265Props) {
  return <section data-module="265" data-active={active} aria-label={label} className="generated-module generated-module-265">
    <div className="generated-module__hud"><span>MODULE 265</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
