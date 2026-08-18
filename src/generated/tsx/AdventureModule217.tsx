import * as React from "react";

export type AdventureModule217Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule217({label="Forge-IT module",active=true,onAction}:AdventureModule217Props) {
  return <section data-module="217" data-active={active} aria-label={label} className="generated-module generated-module-217">
    <div className="generated-module__hud"><span>MODULE 217</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
