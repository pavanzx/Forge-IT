import * as React from "react";

export type AdventureModule244Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule244({label="Forge-IT module",active=true,onAction}:AdventureModule244Props) {
  return <section data-module="244" data-active={active} aria-label={label} className="generated-module generated-module-244">
    <div className="generated-module__hud"><span>MODULE 244</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
