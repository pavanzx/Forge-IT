import * as React from "react";

export type AdventureModule185Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule185({label="Forge-IT module",active=true,onAction}:AdventureModule185Props) {
  return <section data-module="185" data-active={active} aria-label={label} className="generated-module generated-module-185">
    <div className="generated-module__hud"><span>MODULE 185</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
