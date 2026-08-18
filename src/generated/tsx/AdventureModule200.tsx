import * as React from "react";

export type AdventureModule200Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule200({label="Forge-IT module",active=true,onAction}:AdventureModule200Props) {
  return <section data-module="200" data-active={active} aria-label={label} className="generated-module generated-module-200">
    <div className="generated-module__hud"><span>MODULE 200</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
