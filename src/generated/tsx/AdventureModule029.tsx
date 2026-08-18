import * as React from "react";

export type AdventureModule029Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule029({label="Forge-IT module",active=true,onAction}:AdventureModule029Props) {
  return <section data-module="029" data-active={active} aria-label={label} className="generated-module generated-module-029">
    <div className="generated-module__hud"><span>MODULE 029</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
