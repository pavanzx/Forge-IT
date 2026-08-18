import * as React from "react";

export type AdventureModule316Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule316({label="Forge-IT module",active=true,onAction}:AdventureModule316Props) {
  return <section data-module="316" data-active={active} aria-label={label} className="generated-module generated-module-316">
    <div className="generated-module__hud"><span>MODULE 316</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
