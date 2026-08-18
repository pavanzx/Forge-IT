import * as React from "react";

export type AdventureModule372Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule372({label="Forge-IT module",active=true,onAction}:AdventureModule372Props) {
  return <section data-module="372" data-active={active} aria-label={label} className="generated-module generated-module-372">
    <div className="generated-module__hud"><span>MODULE 372</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
