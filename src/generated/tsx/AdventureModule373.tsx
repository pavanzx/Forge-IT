import * as React from "react";

export type AdventureModule373Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule373({label="Forge-IT module",active=true,onAction}:AdventureModule373Props) {
  return <section data-module="373" data-active={active} aria-label={label} className="generated-module generated-module-373">
    <div className="generated-module__hud"><span>MODULE 373</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
