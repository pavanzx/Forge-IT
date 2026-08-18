import * as React from "react";

export type AdventureModule178Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule178({label="Forge-IT module",active=true,onAction}:AdventureModule178Props) {
  return <section data-module="178" data-active={active} aria-label={label} className="generated-module generated-module-178">
    <div className="generated-module__hud"><span>MODULE 178</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
