import * as React from "react";

export type AdventureModule314Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule314({label="Forge-IT module",active=true,onAction}:AdventureModule314Props) {
  return <section data-module="314" data-active={active} aria-label={label} className="generated-module generated-module-314">
    <div className="generated-module__hud"><span>MODULE 314</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
