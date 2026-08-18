import * as React from "react";

export type AdventureModule002Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule002({label="Forge-IT module",active=true,onAction}:AdventureModule002Props) {
  return <section data-module="002" data-active={active} aria-label={label} className="generated-module generated-module-002">
    <div className="generated-module__hud"><span>MODULE 002</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
