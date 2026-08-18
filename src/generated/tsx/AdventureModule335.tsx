import * as React from "react";

export type AdventureModule335Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule335({label="Forge-IT module",active=true,onAction}:AdventureModule335Props) {
  return <section data-module="335" data-active={active} aria-label={label} className="generated-module generated-module-335">
    <div className="generated-module__hud"><span>MODULE 335</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
