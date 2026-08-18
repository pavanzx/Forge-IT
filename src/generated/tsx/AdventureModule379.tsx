import * as React from "react";

export type AdventureModule379Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule379({label="Forge-IT module",active=true,onAction}:AdventureModule379Props) {
  return <section data-module="379" data-active={active} aria-label={label} className="generated-module generated-module-379">
    <div className="generated-module__hud"><span>MODULE 379</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
