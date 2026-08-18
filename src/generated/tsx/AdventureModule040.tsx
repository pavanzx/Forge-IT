import * as React from "react";

export type AdventureModule040Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule040({label="Forge-IT module",active=true,onAction}:AdventureModule040Props) {
  return <section data-module="040" data-active={active} aria-label={label} className="generated-module generated-module-040">
    <div className="generated-module__hud"><span>MODULE 040</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
