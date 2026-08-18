import * as React from "react";

export type AdventureModule219Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule219({label="Forge-IT module",active=true,onAction}:AdventureModule219Props) {
  return <section data-module="219" data-active={active} aria-label={label} className="generated-module generated-module-219">
    <div className="generated-module__hud"><span>MODULE 219</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
