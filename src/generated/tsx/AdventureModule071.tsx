import * as React from "react";

export type AdventureModule071Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule071({label="Forge-IT module",active=true,onAction}:AdventureModule071Props) {
  return <section data-module="071" data-active={active} aria-label={label} className="generated-module generated-module-071">
    <div className="generated-module__hud"><span>MODULE 071</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
