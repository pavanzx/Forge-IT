import * as React from "react";

export type AdventureModule009Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule009({label="Forge-IT module",active=true,onAction}:AdventureModule009Props) {
  return <section data-module="009" data-active={active} aria-label={label} className="generated-module generated-module-009">
    <div className="generated-module__hud"><span>MODULE 009</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
