import * as React from "react";

export type AdventureModule257Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule257({label="Forge-IT module",active=true,onAction}:AdventureModule257Props) {
  return <section data-module="257" data-active={active} aria-label={label} className="generated-module generated-module-257">
    <div className="generated-module__hud"><span>MODULE 257</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
