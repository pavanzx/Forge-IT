import * as React from "react";

export type AdventureModule272Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule272({label="Forge-IT module",active=true,onAction}:AdventureModule272Props) {
  return <section data-module="272" data-active={active} aria-label={label} className="generated-module generated-module-272">
    <div className="generated-module__hud"><span>MODULE 272</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
