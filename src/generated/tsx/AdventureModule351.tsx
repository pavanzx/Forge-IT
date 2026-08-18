import * as React from "react";

export type AdventureModule351Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule351({label="Forge-IT module",active=true,onAction}:AdventureModule351Props) {
  return <section data-module="351" data-active={active} aria-label={label} className="generated-module generated-module-351">
    <div className="generated-module__hud"><span>MODULE 351</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
