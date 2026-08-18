import * as React from "react";

export type AdventureModule081Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule081({label="Forge-IT module",active=true,onAction}:AdventureModule081Props) {
  return <section data-module="081" data-active={active} aria-label={label} className="generated-module generated-module-081">
    <div className="generated-module__hud"><span>MODULE 081</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
