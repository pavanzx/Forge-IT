import * as React from "react";

export type AdventureModule339Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule339({label="Forge-IT module",active=true,onAction}:AdventureModule339Props) {
  return <section data-module="339" data-active={active} aria-label={label} className="generated-module generated-module-339">
    <div className="generated-module__hud"><span>MODULE 339</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
