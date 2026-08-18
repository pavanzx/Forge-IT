import * as React from "react";

export type AdventureModule042Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule042({label="Forge-IT module",active=true,onAction}:AdventureModule042Props) {
  return <section data-module="042" data-active={active} aria-label={label} className="generated-module generated-module-042">
    <div className="generated-module__hud"><span>MODULE 042</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
