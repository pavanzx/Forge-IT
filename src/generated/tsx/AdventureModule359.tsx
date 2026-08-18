import * as React from "react";

export type AdventureModule359Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule359({label="Forge-IT module",active=true,onAction}:AdventureModule359Props) {
  return <section data-module="359" data-active={active} aria-label={label} className="generated-module generated-module-359">
    <div className="generated-module__hud"><span>MODULE 359</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
