import * as React from "react";

export type AdventureModule161Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule161({label="Forge-IT module",active=true,onAction}:AdventureModule161Props) {
  return <section data-module="161" data-active={active} aria-label={label} className="generated-module generated-module-161">
    <div className="generated-module__hud"><span>MODULE 161</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
