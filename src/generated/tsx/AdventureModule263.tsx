import * as React from "react";

export type AdventureModule263Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule263({label="Forge-IT module",active=true,onAction}:AdventureModule263Props) {
  return <section data-module="263" data-active={active} aria-label={label} className="generated-module generated-module-263">
    <div className="generated-module__hud"><span>MODULE 263</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
