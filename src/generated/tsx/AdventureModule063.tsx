import * as React from "react";

export type AdventureModule063Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule063({label="Forge-IT module",active=true,onAction}:AdventureModule063Props) {
  return <section data-module="063" data-active={active} aria-label={label} className="generated-module generated-module-063">
    <div className="generated-module__hud"><span>MODULE 063</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
