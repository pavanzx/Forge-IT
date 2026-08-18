import * as React from "react";

export type AdventureModule059Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule059({label="Forge-IT module",active=true,onAction}:AdventureModule059Props) {
  return <section data-module="059" data-active={active} aria-label={label} className="generated-module generated-module-059">
    <div className="generated-module__hud"><span>MODULE 059</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
