import * as React from "react";

export type AdventureModule097Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule097({label="Forge-IT module",active=true,onAction}:AdventureModule097Props) {
  return <section data-module="097" data-active={active} aria-label={label} className="generated-module generated-module-097">
    <div className="generated-module__hud"><span>MODULE 097</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
