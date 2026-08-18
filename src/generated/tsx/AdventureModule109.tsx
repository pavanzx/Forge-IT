import * as React from "react";

export type AdventureModule109Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule109({label="Forge-IT module",active=true,onAction}:AdventureModule109Props) {
  return <section data-module="109" data-active={active} aria-label={label} className="generated-module generated-module-109">
    <div className="generated-module__hud"><span>MODULE 109</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
