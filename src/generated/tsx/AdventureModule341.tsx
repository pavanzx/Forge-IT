import * as React from "react";

export type AdventureModule341Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule341({label="Forge-IT module",active=true,onAction}:AdventureModule341Props) {
  return <section data-module="341" data-active={active} aria-label={label} className="generated-module generated-module-341">
    <div className="generated-module__hud"><span>MODULE 341</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
