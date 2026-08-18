import * as React from "react";

export type AdventureModule102Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule102({label="Forge-IT module",active=true,onAction}:AdventureModule102Props) {
  return <section data-module="102" data-active={active} aria-label={label} className="generated-module generated-module-102">
    <div className="generated-module__hud"><span>MODULE 102</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
