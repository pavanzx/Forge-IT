import * as React from "react";

export type AdventureModule023Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule023({label="Forge-IT module",active=true,onAction}:AdventureModule023Props) {
  return <section data-module="023" data-active={active} aria-label={label} className="generated-module generated-module-023">
    <div className="generated-module__hud"><span>MODULE 023</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
