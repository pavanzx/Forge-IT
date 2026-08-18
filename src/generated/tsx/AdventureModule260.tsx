import * as React from "react";

export type AdventureModule260Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule260({label="Forge-IT module",active=true,onAction}:AdventureModule260Props) {
  return <section data-module="260" data-active={active} aria-label={label} className="generated-module generated-module-260">
    <div className="generated-module__hud"><span>MODULE 260</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
