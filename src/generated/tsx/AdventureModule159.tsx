import * as React from "react";

export type AdventureModule159Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule159({label="Forge-IT module",active=true,onAction}:AdventureModule159Props) {
  return <section data-module="159" data-active={active} aria-label={label} className="generated-module generated-module-159">
    <div className="generated-module__hud"><span>MODULE 159</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
