import * as React from "react";

export type AdventureModule401Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule401({label="Forge-IT module",active=true,onAction}:AdventureModule401Props) {
  return <section data-module="401" data-active={active} aria-label={label} className="generated-module generated-module-401">
    <div className="generated-module__hud"><span>MODULE 401</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
