import * as React from "react";

export type AdventureModule232Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule232({label="Forge-IT module",active=true,onAction}:AdventureModule232Props) {
  return <section data-module="232" data-active={active} aria-label={label} className="generated-module generated-module-232">
    <div className="generated-module__hud"><span>MODULE 232</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
