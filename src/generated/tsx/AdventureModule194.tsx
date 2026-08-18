import * as React from "react";

export type AdventureModule194Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule194({label="Forge-IT module",active=true,onAction}:AdventureModule194Props) {
  return <section data-module="194" data-active={active} aria-label={label} className="generated-module generated-module-194">
    <div className="generated-module__hud"><span>MODULE 194</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
