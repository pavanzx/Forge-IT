import * as React from "react";

export type AdventureModule061Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule061({label="Forge-IT module",active=true,onAction}:AdventureModule061Props) {
  return <section data-module="061" data-active={active} aria-label={label} className="generated-module generated-module-061">
    <div className="generated-module__hud"><span>MODULE 061</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
