import * as React from "react";

export type AdventureModule170Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule170({label="Forge-IT module",active=true,onAction}:AdventureModule170Props) {
  return <section data-module="170" data-active={active} aria-label={label} className="generated-module generated-module-170">
    <div className="generated-module__hud"><span>MODULE 170</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
