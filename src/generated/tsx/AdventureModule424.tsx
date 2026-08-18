import * as React from "react";

export type AdventureModule424Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule424({label="Forge-IT module",active=true,onAction}:AdventureModule424Props) {
  return <section data-module="424" data-active={active} aria-label={label} className="generated-module generated-module-424">
    <div className="generated-module__hud"><span>MODULE 424</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
