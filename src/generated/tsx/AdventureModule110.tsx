import * as React from "react";

export type AdventureModule110Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule110({label="Forge-IT module",active=true,onAction}:AdventureModule110Props) {
  return <section data-module="110" data-active={active} aria-label={label} className="generated-module generated-module-110">
    <div className="generated-module__hud"><span>MODULE 110</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
