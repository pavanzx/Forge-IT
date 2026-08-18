import * as React from "react";

export type AdventureModule294Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule294({label="Forge-IT module",active=true,onAction}:AdventureModule294Props) {
  return <section data-module="294" data-active={active} aria-label={label} className="generated-module generated-module-294">
    <div className="generated-module__hud"><span>MODULE 294</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
