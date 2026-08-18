import * as React from "react";

export type AdventureModule347Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule347({label="Forge-IT module",active=true,onAction}:AdventureModule347Props) {
  return <section data-module="347" data-active={active} aria-label={label} className="generated-module generated-module-347">
    <div className="generated-module__hud"><span>MODULE 347</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
