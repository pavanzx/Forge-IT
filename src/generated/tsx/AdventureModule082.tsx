import * as React from "react";

export type AdventureModule082Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule082({label="Forge-IT module",active=true,onAction}:AdventureModule082Props) {
  return <section data-module="082" data-active={active} aria-label={label} className="generated-module generated-module-082">
    <div className="generated-module__hud"><span>MODULE 082</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
