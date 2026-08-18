import * as React from "react";

export type AdventureModule287Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule287({label="Forge-IT module",active=true,onAction}:AdventureModule287Props) {
  return <section data-module="287" data-active={active} aria-label={label} className="generated-module generated-module-287">
    <div className="generated-module__hud"><span>MODULE 287</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
