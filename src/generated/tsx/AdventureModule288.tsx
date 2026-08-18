import * as React from "react";

export type AdventureModule288Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule288({label="Forge-IT module",active=true,onAction}:AdventureModule288Props) {
  return <section data-module="288" data-active={active} aria-label={label} className="generated-module generated-module-288">
    <div className="generated-module__hud"><span>MODULE 288</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
