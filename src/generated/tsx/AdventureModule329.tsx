import * as React from "react";

export type AdventureModule329Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule329({label="Forge-IT module",active=true,onAction}:AdventureModule329Props) {
  return <section data-module="329" data-active={active} aria-label={label} className="generated-module generated-module-329">
    <div className="generated-module__hud"><span>MODULE 329</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
