import * as React from "react";

export type AdventureModule144Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule144({label="Forge-IT module",active=true,onAction}:AdventureModule144Props) {
  return <section data-module="144" data-active={active} aria-label={label} className="generated-module generated-module-144">
    <div className="generated-module__hud"><span>MODULE 144</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
