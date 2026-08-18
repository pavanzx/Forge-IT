import * as React from "react";

export type AdventureModule155Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule155({label="Forge-IT module",active=true,onAction}:AdventureModule155Props) {
  return <section data-module="155" data-active={active} aria-label={label} className="generated-module generated-module-155">
    <div className="generated-module__hud"><span>MODULE 155</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
