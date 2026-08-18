import * as React from "react";

export type AdventureModule060Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule060({label="Forge-IT module",active=true,onAction}:AdventureModule060Props) {
  return <section data-module="060" data-active={active} aria-label={label} className="generated-module generated-module-060">
    <div className="generated-module__hud"><span>MODULE 060</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
