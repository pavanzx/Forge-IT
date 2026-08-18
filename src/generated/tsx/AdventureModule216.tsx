import * as React from "react";

export type AdventureModule216Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule216({label="Forge-IT module",active=true,onAction}:AdventureModule216Props) {
  return <section data-module="216" data-active={active} aria-label={label} className="generated-module generated-module-216">
    <div className="generated-module__hud"><span>MODULE 216</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
