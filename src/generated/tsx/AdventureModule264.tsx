import * as React from "react";

export type AdventureModule264Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule264({label="Forge-IT module",active=true,onAction}:AdventureModule264Props) {
  return <section data-module="264" data-active={active} aria-label={label} className="generated-module generated-module-264">
    <div className="generated-module__hud"><span>MODULE 264</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
