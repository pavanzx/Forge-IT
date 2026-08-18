import * as React from "react";

export type AdventureModule236Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule236({label="Forge-IT module",active=true,onAction}:AdventureModule236Props) {
  return <section data-module="236" data-active={active} aria-label={label} className="generated-module generated-module-236">
    <div className="generated-module__hud"><span>MODULE 236</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
