import * as React from "react";

export type AdventureModule312Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule312({label="Forge-IT module",active=true,onAction}:AdventureModule312Props) {
  return <section data-module="312" data-active={active} aria-label={label} className="generated-module generated-module-312">
    <div className="generated-module__hud"><span>MODULE 312</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
