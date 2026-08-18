import * as React from "react";

export type AdventureModule100Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule100({label="Forge-IT module",active=true,onAction}:AdventureModule100Props) {
  return <section data-module="100" data-active={active} aria-label={label} className="generated-module generated-module-100">
    <div className="generated-module__hud"><span>MODULE 100</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
