import * as React from "react";

export type AdventureModule340Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule340({label="Forge-IT module",active=true,onAction}:AdventureModule340Props) {
  return <section data-module="340" data-active={active} aria-label={label} className="generated-module generated-module-340">
    <div className="generated-module__hud"><span>MODULE 340</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
