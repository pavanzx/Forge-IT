import * as React from "react";

export type AdventureModule376Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule376({label="Forge-IT module",active=true,onAction}:AdventureModule376Props) {
  return <section data-module="376" data-active={active} aria-label={label} className="generated-module generated-module-376">
    <div className="generated-module__hud"><span>MODULE 376</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
