import * as React from "react";

export type AdventureModule426Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule426({label="Forge-IT module",active=true,onAction}:AdventureModule426Props) {
  return <section data-module="426" data-active={active} aria-label={label} className="generated-module generated-module-426">
    <div className="generated-module__hud"><span>MODULE 426</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
