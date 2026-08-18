import * as React from "react";

export type AdventureModule327Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule327({label="Forge-IT module",active=true,onAction}:AdventureModule327Props) {
  return <section data-module="327" data-active={active} aria-label={label} className="generated-module generated-module-327">
    <div className="generated-module__hud"><span>MODULE 327</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
