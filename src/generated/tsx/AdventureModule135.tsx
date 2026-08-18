import * as React from "react";

export type AdventureModule135Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule135({label="Forge-IT module",active=true,onAction}:AdventureModule135Props) {
  return <section data-module="135" data-active={active} aria-label={label} className="generated-module generated-module-135">
    <div className="generated-module__hud"><span>MODULE 135</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
