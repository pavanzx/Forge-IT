import * as React from "react";

export type AdventureModule370Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule370({label="Forge-IT module",active=true,onAction}:AdventureModule370Props) {
  return <section data-module="370" data-active={active} aria-label={label} className="generated-module generated-module-370">
    <div className="generated-module__hud"><span>MODULE 370</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
