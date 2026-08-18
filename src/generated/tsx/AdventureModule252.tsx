import * as React from "react";

export type AdventureModule252Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule252({label="Forge-IT module",active=true,onAction}:AdventureModule252Props) {
  return <section data-module="252" data-active={active} aria-label={label} className="generated-module generated-module-252">
    <div className="generated-module__hud"><span>MODULE 252</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
