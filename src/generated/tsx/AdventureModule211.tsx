import * as React from "react";

export type AdventureModule211Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule211({label="Forge-IT module",active=true,onAction}:AdventureModule211Props) {
  return <section data-module="211" data-active={active} aria-label={label} className="generated-module generated-module-211">
    <div className="generated-module__hud"><span>MODULE 211</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
