import * as React from "react";

export type AdventureModule214Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule214({label="Forge-IT module",active=true,onAction}:AdventureModule214Props) {
  return <section data-module="214" data-active={active} aria-label={label} className="generated-module generated-module-214">
    <div className="generated-module__hud"><span>MODULE 214</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
