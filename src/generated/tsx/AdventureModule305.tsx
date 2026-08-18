import * as React from "react";

export type AdventureModule305Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule305({label="Forge-IT module",active=true,onAction}:AdventureModule305Props) {
  return <section data-module="305" data-active={active} aria-label={label} className="generated-module generated-module-305">
    <div className="generated-module__hud"><span>MODULE 305</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
