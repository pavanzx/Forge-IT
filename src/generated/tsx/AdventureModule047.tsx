import * as React from "react";

export type AdventureModule047Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule047({label="Forge-IT module",active=true,onAction}:AdventureModule047Props) {
  return <section data-module="047" data-active={active} aria-label={label} className="generated-module generated-module-047">
    <div className="generated-module__hud"><span>MODULE 047</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
