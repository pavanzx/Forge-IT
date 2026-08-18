import * as React from "react";

export type AdventureModule124Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule124({label="Forge-IT module",active=true,onAction}:AdventureModule124Props) {
  return <section data-module="124" data-active={active} aria-label={label} className="generated-module generated-module-124">
    <div className="generated-module__hud"><span>MODULE 124</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
