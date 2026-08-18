import * as React from "react";

export type AdventureModule227Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule227({label="Forge-IT module",active=true,onAction}:AdventureModule227Props) {
  return <section data-module="227" data-active={active} aria-label={label} className="generated-module generated-module-227">
    <div className="generated-module__hud"><span>MODULE 227</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
