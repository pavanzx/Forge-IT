import * as React from "react";

export type AdventureModule212Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule212({label="Forge-IT module",active=true,onAction}:AdventureModule212Props) {
  return <section data-module="212" data-active={active} aria-label={label} className="generated-module generated-module-212">
    <div className="generated-module__hud"><span>MODULE 212</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
