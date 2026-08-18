import * as React from "react";

export type AdventureModule279Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule279({label="Forge-IT module",active=true,onAction}:AdventureModule279Props) {
  return <section data-module="279" data-active={active} aria-label={label} className="generated-module generated-module-279">
    <div className="generated-module__hud"><span>MODULE 279</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
