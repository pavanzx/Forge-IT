import * as React from "react";

export type AdventureModule348Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule348({label="Forge-IT module",active=true,onAction}:AdventureModule348Props) {
  return <section data-module="348" data-active={active} aria-label={label} className="generated-module generated-module-348">
    <div className="generated-module__hud"><span>MODULE 348</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
