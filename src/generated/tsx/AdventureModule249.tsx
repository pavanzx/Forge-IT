import * as React from "react";

export type AdventureModule249Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule249({label="Forge-IT module",active=true,onAction}:AdventureModule249Props) {
  return <section data-module="249" data-active={active} aria-label={label} className="generated-module generated-module-249">
    <div className="generated-module__hud"><span>MODULE 249</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
