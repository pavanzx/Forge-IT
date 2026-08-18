import * as React from "react";

export type AdventureModule136Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule136({label="Forge-IT module",active=true,onAction}:AdventureModule136Props) {
  return <section data-module="136" data-active={active} aria-label={label} className="generated-module generated-module-136">
    <div className="generated-module__hud"><span>MODULE 136</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
