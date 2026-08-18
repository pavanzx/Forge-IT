import * as React from "react";

export type AdventureModule346Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule346({label="Forge-IT module",active=true,onAction}:AdventureModule346Props) {
  return <section data-module="346" data-active={active} aria-label={label} className="generated-module generated-module-346">
    <div className="generated-module__hud"><span>MODULE 346</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
