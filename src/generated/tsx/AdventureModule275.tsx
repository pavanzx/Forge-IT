import * as React from "react";

export type AdventureModule275Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule275({label="Forge-IT module",active=true,onAction}:AdventureModule275Props) {
  return <section data-module="275" data-active={active} aria-label={label} className="generated-module generated-module-275">
    <div className="generated-module__hud"><span>MODULE 275</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
