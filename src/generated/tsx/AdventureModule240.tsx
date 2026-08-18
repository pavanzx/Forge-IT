import * as React from "react";

export type AdventureModule240Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule240({label="Forge-IT module",active=true,onAction}:AdventureModule240Props) {
  return <section data-module="240" data-active={active} aria-label={label} className="generated-module generated-module-240">
    <div className="generated-module__hud"><span>MODULE 240</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
