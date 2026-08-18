import * as React from "react";

export type AdventureModule142Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule142({label="Forge-IT module",active=true,onAction}:AdventureModule142Props) {
  return <section data-module="142" data-active={active} aria-label={label} className="generated-module generated-module-142">
    <div className="generated-module__hud"><span>MODULE 142</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
