import * as React from "react";

export type AdventureModule220Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule220({label="Forge-IT module",active=true,onAction}:AdventureModule220Props) {
  return <section data-module="220" data-active={active} aria-label={label} className="generated-module generated-module-220">
    <div className="generated-module__hud"><span>MODULE 220</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
