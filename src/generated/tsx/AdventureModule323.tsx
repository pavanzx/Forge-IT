import * as React from "react";

export type AdventureModule323Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule323({label="Forge-IT module",active=true,onAction}:AdventureModule323Props) {
  return <section data-module="323" data-active={active} aria-label={label} className="generated-module generated-module-323">
    <div className="generated-module__hud"><span>MODULE 323</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
