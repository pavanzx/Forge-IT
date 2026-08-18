import * as React from "react";

export type AdventureModule350Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule350({label="Forge-IT module",active=true,onAction}:AdventureModule350Props) {
  return <section data-module="350" data-active={active} aria-label={label} className="generated-module generated-module-350">
    <div className="generated-module__hud"><span>MODULE 350</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
