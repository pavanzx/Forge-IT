import * as React from "react";

export type AdventureModule245Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule245({label="Forge-IT module",active=true,onAction}:AdventureModule245Props) {
  return <section data-module="245" data-active={active} aria-label={label} className="generated-module generated-module-245">
    <div className="generated-module__hud"><span>MODULE 245</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
