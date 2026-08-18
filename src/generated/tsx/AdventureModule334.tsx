import * as React from "react";

export type AdventureModule334Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule334({label="Forge-IT module",active=true,onAction}:AdventureModule334Props) {
  return <section data-module="334" data-active={active} aria-label={label} className="generated-module generated-module-334">
    <div className="generated-module__hud"><span>MODULE 334</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
