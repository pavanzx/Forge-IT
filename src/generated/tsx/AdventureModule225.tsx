import * as React from "react";

export type AdventureModule225Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule225({label="Forge-IT module",active=true,onAction}:AdventureModule225Props) {
  return <section data-module="225" data-active={active} aria-label={label} className="generated-module generated-module-225">
    <div className="generated-module__hud"><span>MODULE 225</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
