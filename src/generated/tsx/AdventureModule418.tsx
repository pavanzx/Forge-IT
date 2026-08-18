import * as React from "react";

export type AdventureModule418Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule418({label="Forge-IT module",active=true,onAction}:AdventureModule418Props) {
  return <section data-module="418" data-active={active} aria-label={label} className="generated-module generated-module-418">
    <div className="generated-module__hud"><span>MODULE 418</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
