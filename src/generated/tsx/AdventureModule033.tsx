import * as React from "react";

export type AdventureModule033Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule033({label="Forge-IT module",active=true,onAction}:AdventureModule033Props) {
  return <section data-module="033" data-active={active} aria-label={label} className="generated-module generated-module-033">
    <div className="generated-module__hud"><span>MODULE 033</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
