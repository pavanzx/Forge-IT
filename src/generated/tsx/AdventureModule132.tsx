import * as React from "react";

export type AdventureModule132Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule132({label="Forge-IT module",active=true,onAction}:AdventureModule132Props) {
  return <section data-module="132" data-active={active} aria-label={label} className="generated-module generated-module-132">
    <div className="generated-module__hud"><span>MODULE 132</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
