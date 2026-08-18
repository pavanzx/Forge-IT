import * as React from "react";

export type AdventureModule361Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule361({label="Forge-IT module",active=true,onAction}:AdventureModule361Props) {
  return <section data-module="361" data-active={active} aria-label={label} className="generated-module generated-module-361">
    <div className="generated-module__hud"><span>MODULE 361</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
