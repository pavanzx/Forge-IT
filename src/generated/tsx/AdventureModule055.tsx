import * as React from "react";

export type AdventureModule055Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule055({label="Forge-IT module",active=true,onAction}:AdventureModule055Props) {
  return <section data-module="055" data-active={active} aria-label={label} className="generated-module generated-module-055">
    <div className="generated-module__hud"><span>MODULE 055</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
