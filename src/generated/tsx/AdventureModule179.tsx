import * as React from "react";

export type AdventureModule179Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule179({label="Forge-IT module",active=true,onAction}:AdventureModule179Props) {
  return <section data-module="179" data-active={active} aria-label={label} className="generated-module generated-module-179">
    <div className="generated-module__hud"><span>MODULE 179</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
