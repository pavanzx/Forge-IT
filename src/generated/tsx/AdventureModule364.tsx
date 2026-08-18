import * as React from "react";

export type AdventureModule364Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule364({label="Forge-IT module",active=true,onAction}:AdventureModule364Props) {
  return <section data-module="364" data-active={active} aria-label={label} className="generated-module generated-module-364">
    <div className="generated-module__hud"><span>MODULE 364</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
