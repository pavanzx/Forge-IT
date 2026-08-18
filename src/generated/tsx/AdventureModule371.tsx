import * as React from "react";

export type AdventureModule371Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule371({label="Forge-IT module",active=true,onAction}:AdventureModule371Props) {
  return <section data-module="371" data-active={active} aria-label={label} className="generated-module generated-module-371">
    <div className="generated-module__hud"><span>MODULE 371</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
