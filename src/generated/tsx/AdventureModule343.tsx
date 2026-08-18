import * as React from "react";

export type AdventureModule343Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule343({label="Forge-IT module",active=true,onAction}:AdventureModule343Props) {
  return <section data-module="343" data-active={active} aria-label={label} className="generated-module generated-module-343">
    <div className="generated-module__hud"><span>MODULE 343</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
