import * as React from "react";

export type AdventureModule204Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule204({label="Forge-IT module",active=true,onAction}:AdventureModule204Props) {
  return <section data-module="204" data-active={active} aria-label={label} className="generated-module generated-module-204">
    <div className="generated-module__hud"><span>MODULE 204</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
