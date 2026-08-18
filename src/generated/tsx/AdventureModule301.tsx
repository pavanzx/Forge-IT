import * as React from "react";

export type AdventureModule301Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule301({label="Forge-IT module",active=true,onAction}:AdventureModule301Props) {
  return <section data-module="301" data-active={active} aria-label={label} className="generated-module generated-module-301">
    <div className="generated-module__hud"><span>MODULE 301</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
