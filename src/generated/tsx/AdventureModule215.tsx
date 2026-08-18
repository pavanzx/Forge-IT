import * as React from "react";

export type AdventureModule215Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule215({label="Forge-IT module",active=true,onAction}:AdventureModule215Props) {
  return <section data-module="215" data-active={active} aria-label={label} className="generated-module generated-module-215">
    <div className="generated-module__hud"><span>MODULE 215</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
