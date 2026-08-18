import * as React from "react";

export type AdventureModule311Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule311({label="Forge-IT module",active=true,onAction}:AdventureModule311Props) {
  return <section data-module="311" data-active={active} aria-label={label} className="generated-module generated-module-311">
    <div className="generated-module__hud"><span>MODULE 311</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
