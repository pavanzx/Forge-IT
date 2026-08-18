import * as React from "react";

export type AdventureModule075Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule075({label="Forge-IT module",active=true,onAction}:AdventureModule075Props) {
  return <section data-module="075" data-active={active} aria-label={label} className="generated-module generated-module-075">
    <div className="generated-module__hud"><span>MODULE 075</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
