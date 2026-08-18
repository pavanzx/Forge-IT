import * as React from "react";

export type AdventureModule251Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule251({label="Forge-IT module",active=true,onAction}:AdventureModule251Props) {
  return <section data-module="251" data-active={active} aria-label={label} className="generated-module generated-module-251">
    <div className="generated-module__hud"><span>MODULE 251</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
