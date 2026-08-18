import * as React from "react";

export type AdventureModule239Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule239({label="Forge-IT module",active=true,onAction}:AdventureModule239Props) {
  return <section data-module="239" data-active={active} aria-label={label} className="generated-module generated-module-239">
    <div className="generated-module__hud"><span>MODULE 239</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
