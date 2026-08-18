import * as React from "react";

export type AdventureModule027Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule027({label="Forge-IT module",active=true,onAction}:AdventureModule027Props) {
  return <section data-module="027" data-active={active} aria-label={label} className="generated-module generated-module-027">
    <div className="generated-module__hud"><span>MODULE 027</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
