import * as React from "react";

export type AdventureModule369Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule369({label="Forge-IT module",active=true,onAction}:AdventureModule369Props) {
  return <section data-module="369" data-active={active} aria-label={label} className="generated-module generated-module-369">
    <div className="generated-module__hud"><span>MODULE 369</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
