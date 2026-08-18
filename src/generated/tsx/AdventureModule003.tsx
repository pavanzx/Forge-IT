import * as React from "react";

export type AdventureModule003Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule003({label="Forge-IT module",active=true,onAction}:AdventureModule003Props) {
  return <section data-module="003" data-active={active} aria-label={label} className="generated-module generated-module-003">
    <div className="generated-module__hud"><span>MODULE 003</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
