import * as React from "react";

export type AdventureModule044Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule044({label="Forge-IT module",active=true,onAction}:AdventureModule044Props) {
  return <section data-module="044" data-active={active} aria-label={label} className="generated-module generated-module-044">
    <div className="generated-module__hud"><span>MODULE 044</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
