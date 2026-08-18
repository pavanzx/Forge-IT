import * as React from "react";

export type AdventureModule326Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule326({label="Forge-IT module",active=true,onAction}:AdventureModule326Props) {
  return <section data-module="326" data-active={active} aria-label={label} className="generated-module generated-module-326">
    <div className="generated-module__hud"><span>MODULE 326</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
