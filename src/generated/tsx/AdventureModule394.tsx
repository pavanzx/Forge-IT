import * as React from "react";

export type AdventureModule394Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule394({label="Forge-IT module",active=true,onAction}:AdventureModule394Props) {
  return <section data-module="394" data-active={active} aria-label={label} className="generated-module generated-module-394">
    <div className="generated-module__hud"><span>MODULE 394</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
