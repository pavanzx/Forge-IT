import * as React from "react";

export type AdventureModule025Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule025({label="Forge-IT module",active=true,onAction}:AdventureModule025Props) {
  return <section data-module="025" data-active={active} aria-label={label} className="generated-module generated-module-025">
    <div className="generated-module__hud"><span>MODULE 025</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
