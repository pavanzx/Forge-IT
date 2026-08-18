import * as React from "react";

export type AdventureModule396Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule396({label="Forge-IT module",active=true,onAction}:AdventureModule396Props) {
  return <section data-module="396" data-active={active} aria-label={label} className="generated-module generated-module-396">
    <div className="generated-module__hud"><span>MODULE 396</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
