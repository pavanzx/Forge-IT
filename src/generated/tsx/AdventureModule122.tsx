import * as React from "react";

export type AdventureModule122Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule122({label="Forge-IT module",active=true,onAction}:AdventureModule122Props) {
  return <section data-module="122" data-active={active} aria-label={label} className="generated-module generated-module-122">
    <div className="generated-module__hud"><span>MODULE 122</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
