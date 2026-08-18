import * as React from "react";

export type AdventureModule126Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule126({label="Forge-IT module",active=true,onAction}:AdventureModule126Props) {
  return <section data-module="126" data-active={active} aria-label={label} className="generated-module generated-module-126">
    <div className="generated-module__hud"><span>MODULE 126</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
