import * as React from "react";

export type AdventureModule289Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule289({label="Forge-IT module",active=true,onAction}:AdventureModule289Props) {
  return <section data-module="289" data-active={active} aria-label={label} className="generated-module generated-module-289">
    <div className="generated-module__hud"><span>MODULE 289</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
