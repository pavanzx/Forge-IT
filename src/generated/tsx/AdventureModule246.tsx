import * as React from "react";

export type AdventureModule246Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule246({label="Forge-IT module",active=true,onAction}:AdventureModule246Props) {
  return <section data-module="246" data-active={active} aria-label={label} className="generated-module generated-module-246">
    <div className="generated-module__hud"><span>MODULE 246</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
