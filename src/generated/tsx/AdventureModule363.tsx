import * as React from "react";

export type AdventureModule363Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule363({label="Forge-IT module",active=true,onAction}:AdventureModule363Props) {
  return <section data-module="363" data-active={active} aria-label={label} className="generated-module generated-module-363">
    <div className="generated-module__hud"><span>MODULE 363</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
