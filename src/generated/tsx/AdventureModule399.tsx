import * as React from "react";

export type AdventureModule399Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule399({label="Forge-IT module",active=true,onAction}:AdventureModule399Props) {
  return <section data-module="399" data-active={active} aria-label={label} className="generated-module generated-module-399">
    <div className="generated-module__hud"><span>MODULE 399</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
