import * as React from "react";

export type AdventureModule258Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule258({label="Forge-IT module",active=true,onAction}:AdventureModule258Props) {
  return <section data-module="258" data-active={active} aria-label={label} className="generated-module generated-module-258">
    <div className="generated-module__hud"><span>MODULE 258</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
