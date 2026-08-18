import * as React from "react";

export type AdventureModule011Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule011({label="Forge-IT module",active=true,onAction}:AdventureModule011Props) {
  return <section data-module="011" data-active={active} aria-label={label} className="generated-module generated-module-011">
    <div className="generated-module__hud"><span>MODULE 011</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
