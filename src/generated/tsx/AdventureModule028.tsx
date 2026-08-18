import * as React from "react";

export type AdventureModule028Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule028({label="Forge-IT module",active=true,onAction}:AdventureModule028Props) {
  return <section data-module="028" data-active={active} aria-label={label} className="generated-module generated-module-028">
    <div className="generated-module__hud"><span>MODULE 028</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
