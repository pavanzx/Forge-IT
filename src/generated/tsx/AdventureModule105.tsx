import * as React from "react";

export type AdventureModule105Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule105({label="Forge-IT module",active=true,onAction}:AdventureModule105Props) {
  return <section data-module="105" data-active={active} aria-label={label} className="generated-module generated-module-105">
    <div className="generated-module__hud"><span>MODULE 105</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
