import * as React from "react";

export type AdventureModule419Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule419({label="Forge-IT module",active=true,onAction}:AdventureModule419Props) {
  return <section data-module="419" data-active={active} aria-label={label} className="generated-module generated-module-419">
    <div className="generated-module__hud"><span>MODULE 419</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
