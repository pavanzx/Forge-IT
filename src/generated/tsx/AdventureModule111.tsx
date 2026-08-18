import * as React from "react";

export type AdventureModule111Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule111({label="Forge-IT module",active=true,onAction}:AdventureModule111Props) {
  return <section data-module="111" data-active={active} aria-label={label} className="generated-module generated-module-111">
    <div className="generated-module__hud"><span>MODULE 111</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
