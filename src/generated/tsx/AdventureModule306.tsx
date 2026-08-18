import * as React from "react";

export type AdventureModule306Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule306({label="Forge-IT module",active=true,onAction}:AdventureModule306Props) {
  return <section data-module="306" data-active={active} aria-label={label} className="generated-module generated-module-306">
    <div className="generated-module__hud"><span>MODULE 306</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
