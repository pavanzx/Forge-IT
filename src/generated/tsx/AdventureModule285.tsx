import * as React from "react";

export type AdventureModule285Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule285({label="Forge-IT module",active=true,onAction}:AdventureModule285Props) {
  return <section data-module="285" data-active={active} aria-label={label} className="generated-module generated-module-285">
    <div className="generated-module__hud"><span>MODULE 285</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
