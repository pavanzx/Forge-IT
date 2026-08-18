import * as React from "react";

export type AdventureModule118Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule118({label="Forge-IT module",active=true,onAction}:AdventureModule118Props) {
  return <section data-module="118" data-active={active} aria-label={label} className="generated-module generated-module-118">
    <div className="generated-module__hud"><span>MODULE 118</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
