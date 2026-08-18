import * as React from "react";

export type AdventureModule313Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule313({label="Forge-IT module",active=true,onAction}:AdventureModule313Props) {
  return <section data-module="313" data-active={active} aria-label={label} className="generated-module generated-module-313">
    <div className="generated-module__hud"><span>MODULE 313</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
