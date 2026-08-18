import * as React from "react";

export type AdventureModule308Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule308({label="Forge-IT module",active=true,onAction}:AdventureModule308Props) {
  return <section data-module="308" data-active={active} aria-label={label} className="generated-module generated-module-308">
    <div className="generated-module__hud"><span>MODULE 308</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
