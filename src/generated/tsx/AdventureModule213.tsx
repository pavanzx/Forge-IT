import * as React from "react";

export type AdventureModule213Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule213({label="Forge-IT module",active=true,onAction}:AdventureModule213Props) {
  return <section data-module="213" data-active={active} aria-label={label} className="generated-module generated-module-213">
    <div className="generated-module__hud"><span>MODULE 213</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
