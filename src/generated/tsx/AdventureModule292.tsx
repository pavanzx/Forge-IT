import * as React from "react";

export type AdventureModule292Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule292({label="Forge-IT module",active=true,onAction}:AdventureModule292Props) {
  return <section data-module="292" data-active={active} aria-label={label} className="generated-module generated-module-292">
    <div className="generated-module__hud"><span>MODULE 292</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
