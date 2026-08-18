import * as React from "react";

export type AdventureModule333Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule333({label="Forge-IT module",active=true,onAction}:AdventureModule333Props) {
  return <section data-module="333" data-active={active} aria-label={label} className="generated-module generated-module-333">
    <div className="generated-module__hud"><span>MODULE 333</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
