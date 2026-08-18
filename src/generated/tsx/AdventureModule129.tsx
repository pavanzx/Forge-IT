import * as React from "react";

export type AdventureModule129Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule129({label="Forge-IT module",active=true,onAction}:AdventureModule129Props) {
  return <section data-module="129" data-active={active} aria-label={label} className="generated-module generated-module-129">
    <div className="generated-module__hud"><span>MODULE 129</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
