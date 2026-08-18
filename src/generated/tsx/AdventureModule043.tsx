import * as React from "react";

export type AdventureModule043Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule043({label="Forge-IT module",active=true,onAction}:AdventureModule043Props) {
  return <section data-module="043" data-active={active} aria-label={label} className="generated-module generated-module-043">
    <div className="generated-module__hud"><span>MODULE 043</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
