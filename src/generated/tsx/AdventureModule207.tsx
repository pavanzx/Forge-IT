import * as React from "react";

export type AdventureModule207Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule207({label="Forge-IT module",active=true,onAction}:AdventureModule207Props) {
  return <section data-module="207" data-active={active} aria-label={label} className="generated-module generated-module-207">
    <div className="generated-module__hud"><span>MODULE 207</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
