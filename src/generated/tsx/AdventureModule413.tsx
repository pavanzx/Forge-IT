import * as React from "react";

export type AdventureModule413Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule413({label="Forge-IT module",active=true,onAction}:AdventureModule413Props) {
  return <section data-module="413" data-active={active} aria-label={label} className="generated-module generated-module-413">
    <div className="generated-module__hud"><span>MODULE 413</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
