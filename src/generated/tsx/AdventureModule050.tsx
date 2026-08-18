import * as React from "react";

export type AdventureModule050Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule050({label="Forge-IT module",active=true,onAction}:AdventureModule050Props) {
  return <section data-module="050" data-active={active} aria-label={label} className="generated-module generated-module-050">
    <div className="generated-module__hud"><span>MODULE 050</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
