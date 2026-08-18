import * as React from "react";

export type AdventureModule300Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule300({label="Forge-IT module",active=true,onAction}:AdventureModule300Props) {
  return <section data-module="300" data-active={active} aria-label={label} className="generated-module generated-module-300">
    <div className="generated-module__hud"><span>MODULE 300</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
