import * as React from "react";

export type AdventureModule387Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule387({label="Forge-IT module",active=true,onAction}:AdventureModule387Props) {
  return <section data-module="387" data-active={active} aria-label={label} className="generated-module generated-module-387">
    <div className="generated-module__hud"><span>MODULE 387</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
