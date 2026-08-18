import * as React from "react";

export type AdventureModule299Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule299({label="Forge-IT module",active=true,onAction}:AdventureModule299Props) {
  return <section data-module="299" data-active={active} aria-label={label} className="generated-module generated-module-299">
    <div className="generated-module__hud"><span>MODULE 299</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
