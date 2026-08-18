import * as React from "react";

export type AdventureModule237Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule237({label="Forge-IT module",active=true,onAction}:AdventureModule237Props) {
  return <section data-module="237" data-active={active} aria-label={label} className="generated-module generated-module-237">
    <div className="generated-module__hud"><span>MODULE 237</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
