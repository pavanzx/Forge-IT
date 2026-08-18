import * as React from "react";

export type AdventureModule381Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule381({label="Forge-IT module",active=true,onAction}:AdventureModule381Props) {
  return <section data-module="381" data-active={active} aria-label={label} className="generated-module generated-module-381">
    <div className="generated-module__hud"><span>MODULE 381</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
