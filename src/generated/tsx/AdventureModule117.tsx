import * as React from "react";

export type AdventureModule117Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule117({label="Forge-IT module",active=true,onAction}:AdventureModule117Props) {
  return <section data-module="117" data-active={active} aria-label={label} className="generated-module generated-module-117">
    <div className="generated-module__hud"><span>MODULE 117</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
