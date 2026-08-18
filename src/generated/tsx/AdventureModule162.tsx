import * as React from "react";

export type AdventureModule162Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule162({label="Forge-IT module",active=true,onAction}:AdventureModule162Props) {
  return <section data-module="162" data-active={active} aria-label={label} className="generated-module generated-module-162">
    <div className="generated-module__hud"><span>MODULE 162</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
