import * as React from "react";

export type AdventureModule422Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule422({label="Forge-IT module",active=true,onAction}:AdventureModule422Props) {
  return <section data-module="422" data-active={active} aria-label={label} className="generated-module generated-module-422">
    <div className="generated-module__hud"><span>MODULE 422</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
