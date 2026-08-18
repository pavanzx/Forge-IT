import * as React from "react";

export type AdventureModule224Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule224({label="Forge-IT module",active=true,onAction}:AdventureModule224Props) {
  return <section data-module="224" data-active={active} aria-label={label} className="generated-module generated-module-224">
    <div className="generated-module__hud"><span>MODULE 224</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
