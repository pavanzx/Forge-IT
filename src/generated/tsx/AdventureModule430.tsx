import * as React from "react";

export type AdventureModule430Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule430({label="Forge-IT module",active=true,onAction}:AdventureModule430Props) {
  return <section data-module="430" data-active={active} aria-label={label} className="generated-module generated-module-430">
    <div className="generated-module__hud"><span>MODULE 430</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
