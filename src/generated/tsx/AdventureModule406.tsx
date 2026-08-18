import * as React from "react";

export type AdventureModule406Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule406({label="Forge-IT module",active=true,onAction}:AdventureModule406Props) {
  return <section data-module="406" data-active={active} aria-label={label} className="generated-module generated-module-406">
    <div className="generated-module__hud"><span>MODULE 406</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
