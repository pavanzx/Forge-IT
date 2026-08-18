import * as React from "react";

export type AdventureModule374Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule374({label="Forge-IT module",active=true,onAction}:AdventureModule374Props) {
  return <section data-module="374" data-active={active} aria-label={label} className="generated-module generated-module-374">
    <div className="generated-module__hud"><span>MODULE 374</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
