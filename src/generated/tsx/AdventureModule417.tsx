import * as React from "react";

export type AdventureModule417Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule417({label="Forge-IT module",active=true,onAction}:AdventureModule417Props) {
  return <section data-module="417" data-active={active} aria-label={label} className="generated-module generated-module-417">
    <div className="generated-module__hud"><span>MODULE 417</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
