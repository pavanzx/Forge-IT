import * as React from "react";

export type AdventureModule014Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule014({label="Forge-IT module",active=true,onAction}:AdventureModule014Props) {
  return <section data-module="014" data-active={active} aria-label={label} className="generated-module generated-module-014">
    <div className="generated-module__hud"><span>MODULE 014</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
