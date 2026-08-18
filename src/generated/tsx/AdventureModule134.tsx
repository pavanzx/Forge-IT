import * as React from "react";

export type AdventureModule134Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule134({label="Forge-IT module",active=true,onAction}:AdventureModule134Props) {
  return <section data-module="134" data-active={active} aria-label={label} className="generated-module generated-module-134">
    <div className="generated-module__hud"><span>MODULE 134</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
