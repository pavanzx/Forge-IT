import * as React from "react";

export type AdventureModule052Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule052({label="Forge-IT module",active=true,onAction}:AdventureModule052Props) {
  return <section data-module="052" data-active={active} aria-label={label} className="generated-module generated-module-052">
    <div className="generated-module__hud"><span>MODULE 052</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
