import * as React from "react";

export type AdventureModule208Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule208({label="Forge-IT module",active=true,onAction}:AdventureModule208Props) {
  return <section data-module="208" data-active={active} aria-label={label} className="generated-module generated-module-208">
    <div className="generated-module__hud"><span>MODULE 208</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
