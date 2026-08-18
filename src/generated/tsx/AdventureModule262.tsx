import * as React from "react";

export type AdventureModule262Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule262({label="Forge-IT module",active=true,onAction}:AdventureModule262Props) {
  return <section data-module="262" data-active={active} aria-label={label} className="generated-module generated-module-262">
    <div className="generated-module__hud"><span>MODULE 262</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
