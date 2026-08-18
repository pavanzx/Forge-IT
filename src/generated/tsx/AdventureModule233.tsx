import * as React from "react";

export type AdventureModule233Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule233({label="Forge-IT module",active=true,onAction}:AdventureModule233Props) {
  return <section data-module="233" data-active={active} aria-label={label} className="generated-module generated-module-233">
    <div className="generated-module__hud"><span>MODULE 233</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
