import * as React from "react";

export type AdventureModule397Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule397({label="Forge-IT module",active=true,onAction}:AdventureModule397Props) {
  return <section data-module="397" data-active={active} aria-label={label} className="generated-module generated-module-397">
    <div className="generated-module__hud"><span>MODULE 397</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
