import * as React from "react";

export type AdventureModule184Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule184({label="Forge-IT module",active=true,onAction}:AdventureModule184Props) {
  return <section data-module="184" data-active={active} aria-label={label} className="generated-module generated-module-184">
    <div className="generated-module__hud"><span>MODULE 184</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
