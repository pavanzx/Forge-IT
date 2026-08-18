import * as React from "react";

export type AdventureModule076Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule076({label="Forge-IT module",active=true,onAction}:AdventureModule076Props) {
  return <section data-module="076" data-active={active} aria-label={label} className="generated-module generated-module-076">
    <div className="generated-module__hud"><span>MODULE 076</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
