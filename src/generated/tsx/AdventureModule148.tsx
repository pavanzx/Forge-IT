import * as React from "react";

export type AdventureModule148Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule148({label="Forge-IT module",active=true,onAction}:AdventureModule148Props) {
  return <section data-module="148" data-active={active} aria-label={label} className="generated-module generated-module-148">
    <div className="generated-module__hud"><span>MODULE 148</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
