import * as React from "react";

export type AdventureModule318Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule318({label="Forge-IT module",active=true,onAction}:AdventureModule318Props) {
  return <section data-module="318" data-active={active} aria-label={label} className="generated-module generated-module-318">
    <div className="generated-module__hud"><span>MODULE 318</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
