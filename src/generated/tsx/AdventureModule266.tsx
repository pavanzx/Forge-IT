import * as React from "react";

export type AdventureModule266Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule266({label="Forge-IT module",active=true,onAction}:AdventureModule266Props) {
  return <section data-module="266" data-active={active} aria-label={label} className="generated-module generated-module-266">
    <div className="generated-module__hud"><span>MODULE 266</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
