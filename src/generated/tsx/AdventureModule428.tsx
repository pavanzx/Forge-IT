import * as React from "react";

export type AdventureModule428Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule428({label="Forge-IT module",active=true,onAction}:AdventureModule428Props) {
  return <section data-module="428" data-active={active} aria-label={label} className="generated-module generated-module-428">
    <div className="generated-module__hud"><span>MODULE 428</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
