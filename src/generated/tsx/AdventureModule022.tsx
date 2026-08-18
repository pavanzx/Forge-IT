import * as React from "react";

export type AdventureModule022Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule022({label="Forge-IT module",active=true,onAction}:AdventureModule022Props) {
  return <section data-module="022" data-active={active} aria-label={label} className="generated-module generated-module-022">
    <div className="generated-module__hud"><span>MODULE 022</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
