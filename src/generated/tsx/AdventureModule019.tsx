import * as React from "react";

export type AdventureModule019Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule019({label="Forge-IT module",active=true,onAction}:AdventureModule019Props) {
  return <section data-module="019" data-active={active} aria-label={label} className="generated-module generated-module-019">
    <div className="generated-module__hud"><span>MODULE 019</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
