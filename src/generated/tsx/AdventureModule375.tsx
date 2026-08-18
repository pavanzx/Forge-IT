import * as React from "react";

export type AdventureModule375Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule375({label="Forge-IT module",active=true,onAction}:AdventureModule375Props) {
  return <section data-module="375" data-active={active} aria-label={label} className="generated-module generated-module-375">
    <div className="generated-module__hud"><span>MODULE 375</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
