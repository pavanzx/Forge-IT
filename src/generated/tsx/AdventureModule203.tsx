import * as React from "react";

export type AdventureModule203Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule203({label="Forge-IT module",active=true,onAction}:AdventureModule203Props) {
  return <section data-module="203" data-active={active} aria-label={label} className="generated-module generated-module-203">
    <div className="generated-module__hud"><span>MODULE 203</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
