import * as React from "react";

export type AdventureModule395Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule395({label="Forge-IT module",active=true,onAction}:AdventureModule395Props) {
  return <section data-module="395" data-active={active} aria-label={label} className="generated-module generated-module-395">
    <div className="generated-module__hud"><span>MODULE 395</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
