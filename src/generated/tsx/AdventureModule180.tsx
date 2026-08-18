import * as React from "react";

export type AdventureModule180Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule180({label="Forge-IT module",active=true,onAction}:AdventureModule180Props) {
  return <section data-module="180" data-active={active} aria-label={label} className="generated-module generated-module-180">
    <div className="generated-module__hud"><span>MODULE 180</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
