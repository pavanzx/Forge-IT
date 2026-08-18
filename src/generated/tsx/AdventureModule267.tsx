import * as React from "react";

export type AdventureModule267Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule267({label="Forge-IT module",active=true,onAction}:AdventureModule267Props) {
  return <section data-module="267" data-active={active} aria-label={label} className="generated-module generated-module-267">
    <div className="generated-module__hud"><span>MODULE 267</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
