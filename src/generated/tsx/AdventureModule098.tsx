import * as React from "react";

export type AdventureModule098Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule098({label="Forge-IT module",active=true,onAction}:AdventureModule098Props) {
  return <section data-module="098" data-active={active} aria-label={label} className="generated-module generated-module-098">
    <div className="generated-module__hud"><span>MODULE 098</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
