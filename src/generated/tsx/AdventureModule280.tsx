import * as React from "react";

export type AdventureModule280Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule280({label="Forge-IT module",active=true,onAction}:AdventureModule280Props) {
  return <section data-module="280" data-active={active} aria-label={label} className="generated-module generated-module-280">
    <div className="generated-module__hud"><span>MODULE 280</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
