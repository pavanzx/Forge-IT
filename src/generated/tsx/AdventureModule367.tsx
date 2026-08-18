import * as React from "react";

export type AdventureModule367Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule367({label="Forge-IT module",active=true,onAction}:AdventureModule367Props) {
  return <section data-module="367" data-active={active} aria-label={label} className="generated-module generated-module-367">
    <div className="generated-module__hud"><span>MODULE 367</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
