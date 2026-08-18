import * as React from "react";

export type AdventureModule039Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule039({label="Forge-IT module",active=true,onAction}:AdventureModule039Props) {
  return <section data-module="039" data-active={active} aria-label={label} className="generated-module generated-module-039">
    <div className="generated-module__hud"><span>MODULE 039</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
