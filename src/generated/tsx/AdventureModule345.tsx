import * as React from "react";

export type AdventureModule345Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule345({label="Forge-IT module",active=true,onAction}:AdventureModule345Props) {
  return <section data-module="345" data-active={active} aria-label={label} className="generated-module generated-module-345">
    <div className="generated-module__hud"><span>MODULE 345</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
