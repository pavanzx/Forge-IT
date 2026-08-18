import * as React from "react";

export type AdventureModule056Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule056({label="Forge-IT module",active=true,onAction}:AdventureModule056Props) {
  return <section data-module="056" data-active={active} aria-label={label} className="generated-module generated-module-056">
    <div className="generated-module__hud"><span>MODULE 056</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
