import * as React from "react";

export type AdventureModule324Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule324({label="Forge-IT module",active=true,onAction}:AdventureModule324Props) {
  return <section data-module="324" data-active={active} aria-label={label} className="generated-module generated-module-324">
    <div className="generated-module__hud"><span>MODULE 324</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
