import * as React from "react";

export type AdventureModule035Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule035({label="Forge-IT module",active=true,onAction}:AdventureModule035Props) {
  return <section data-module="035" data-active={active} aria-label={label} className="generated-module generated-module-035">
    <div className="generated-module__hud"><span>MODULE 035</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
