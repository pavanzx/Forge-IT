import * as React from "react";

export type AdventureModule206Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule206({label="Forge-IT module",active=true,onAction}:AdventureModule206Props) {
  return <section data-module="206" data-active={active} aria-label={label} className="generated-module generated-module-206">
    <div className="generated-module__hud"><span>MODULE 206</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
