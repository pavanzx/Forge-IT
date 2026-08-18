import * as React from "react";

export type AdventureModule145Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule145({label="Forge-IT module",active=true,onAction}:AdventureModule145Props) {
  return <section data-module="145" data-active={active} aria-label={label} className="generated-module generated-module-145">
    <div className="generated-module__hud"><span>MODULE 145</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
