import * as React from "react";

export type AdventureModule315Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule315({label="Forge-IT module",active=true,onAction}:AdventureModule315Props) {
  return <section data-module="315" data-active={active} aria-label={label} className="generated-module generated-module-315">
    <div className="generated-module__hud"><span>MODULE 315</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
