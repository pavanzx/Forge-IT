import * as React from "react";

export type AdventureModule253Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule253({label="Forge-IT module",active=true,onAction}:AdventureModule253Props) {
  return <section data-module="253" data-active={active} aria-label={label} className="generated-module generated-module-253">
    <div className="generated-module__hud"><span>MODULE 253</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
