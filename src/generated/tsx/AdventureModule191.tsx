import * as React from "react";

export type AdventureModule191Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule191({label="Forge-IT module",active=true,onAction}:AdventureModule191Props) {
  return <section data-module="191" data-active={active} aria-label={label} className="generated-module generated-module-191">
    <div className="generated-module__hud"><span>MODULE 191</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
