import * as React from "react";

export type AdventureModule276Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule276({label="Forge-IT module",active=true,onAction}:AdventureModule276Props) {
  return <section data-module="276" data-active={active} aria-label={label} className="generated-module generated-module-276">
    <div className="generated-module__hud"><span>MODULE 276</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
