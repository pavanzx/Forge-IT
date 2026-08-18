import * as React from "react";

export type AdventureModule094Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule094({label="Forge-IT module",active=true,onAction}:AdventureModule094Props) {
  return <section data-module="094" data-active={active} aria-label={label} className="generated-module generated-module-094">
    <div className="generated-module__hud"><span>MODULE 094</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
