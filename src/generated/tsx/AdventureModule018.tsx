import * as React from "react";

export type AdventureModule018Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule018({label="Forge-IT module",active=true,onAction}:AdventureModule018Props) {
  return <section data-module="018" data-active={active} aria-label={label} className="generated-module generated-module-018">
    <div className="generated-module__hud"><span>MODULE 018</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
