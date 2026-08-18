import * as React from "react";

export type AdventureModule254Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule254({label="Forge-IT module",active=true,onAction}:AdventureModule254Props) {
  return <section data-module="254" data-active={active} aria-label={label} className="generated-module generated-module-254">
    <div className="generated-module__hud"><span>MODULE 254</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
