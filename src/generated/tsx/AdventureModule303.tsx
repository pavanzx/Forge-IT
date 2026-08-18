import * as React from "react";

export type AdventureModule303Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule303({label="Forge-IT module",active=true,onAction}:AdventureModule303Props) {
  return <section data-module="303" data-active={active} aria-label={label} className="generated-module generated-module-303">
    <div className="generated-module__hud"><span>MODULE 303</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
