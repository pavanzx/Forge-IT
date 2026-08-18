import * as React from "react";

export type AdventureModule150Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule150({label="Forge-IT module",active=true,onAction}:AdventureModule150Props) {
  return <section data-module="150" data-active={active} aria-label={label} className="generated-module generated-module-150">
    <div className="generated-module__hud"><span>MODULE 150</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
