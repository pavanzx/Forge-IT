import * as React from "react";

export type AdventureModule298Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule298({label="Forge-IT module",active=true,onAction}:AdventureModule298Props) {
  return <section data-module="298" data-active={active} aria-label={label} className="generated-module generated-module-298">
    <div className="generated-module__hud"><span>MODULE 298</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
