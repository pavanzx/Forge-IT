import * as React from "react";

export type AdventureModule337Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule337({label="Forge-IT module",active=true,onAction}:AdventureModule337Props) {
  return <section data-module="337" data-active={active} aria-label={label} className="generated-module generated-module-337">
    <div className="generated-module__hud"><span>MODULE 337</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
