import * as React from "react";

export type AdventureModule080Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule080({label="Forge-IT module",active=true,onAction}:AdventureModule080Props) {
  return <section data-module="080" data-active={active} aria-label={label} className="generated-module generated-module-080">
    <div className="generated-module__hud"><span>MODULE 080</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
