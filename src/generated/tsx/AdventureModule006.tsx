import * as React from "react";

export type AdventureModule006Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule006({label="Forge-IT module",active=true,onAction}:AdventureModule006Props) {
  return <section data-module="006" data-active={active} aria-label={label} className="generated-module generated-module-006">
    <div className="generated-module__hud"><span>MODULE 006</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
