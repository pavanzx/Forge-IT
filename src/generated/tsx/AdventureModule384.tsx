import * as React from "react";

export type AdventureModule384Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule384({label="Forge-IT module",active=true,onAction}:AdventureModule384Props) {
  return <section data-module="384" data-active={active} aria-label={label} className="generated-module generated-module-384">
    <div className="generated-module__hud"><span>MODULE 384</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
