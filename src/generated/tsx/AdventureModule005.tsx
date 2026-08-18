import * as React from "react";

export type AdventureModule005Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule005({label="Forge-IT module",active=true,onAction}:AdventureModule005Props) {
  return <section data-module="005" data-active={active} aria-label={label} className="generated-module generated-module-005">
    <div className="generated-module__hud"><span>MODULE 005</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
