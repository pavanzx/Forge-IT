import * as React from "react";

export type AdventureModule106Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule106({label="Forge-IT module",active=true,onAction}:AdventureModule106Props) {
  return <section data-module="106" data-active={active} aria-label={label} className="generated-module generated-module-106">
    <div className="generated-module__hud"><span>MODULE 106</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
