import * as React from "react";

export type AdventureModule261Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule261({label="Forge-IT module",active=true,onAction}:AdventureModule261Props) {
  return <section data-module="261" data-active={active} aria-label={label} className="generated-module generated-module-261">
    <div className="generated-module__hud"><span>MODULE 261</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
