import * as React from "react";

export type AdventureModule349Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule349({label="Forge-IT module",active=true,onAction}:AdventureModule349Props) {
  return <section data-module="349" data-active={active} aria-label={label} className="generated-module generated-module-349">
    <div className="generated-module__hud"><span>MODULE 349</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
