import * as React from "react";

export type AdventureModule234Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule234({label="Forge-IT module",active=true,onAction}:AdventureModule234Props) {
  return <section data-module="234" data-active={active} aria-label={label} className="generated-module generated-module-234">
    <div className="generated-module__hud"><span>MODULE 234</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
