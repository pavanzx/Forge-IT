import * as React from "react";

export type AdventureModule409Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule409({label="Forge-IT module",active=true,onAction}:AdventureModule409Props) {
  return <section data-module="409" data-active={active} aria-label={label} className="generated-module generated-module-409">
    <div className="generated-module__hud"><span>MODULE 409</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
