import * as React from "react";

export type AdventureModule383Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule383({label="Forge-IT module",active=true,onAction}:AdventureModule383Props) {
  return <section data-module="383" data-active={active} aria-label={label} className="generated-module generated-module-383">
    <div className="generated-module__hud"><span>MODULE 383</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
