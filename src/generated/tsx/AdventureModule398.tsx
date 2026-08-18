import * as React from "react";

export type AdventureModule398Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule398({label="Forge-IT module",active=true,onAction}:AdventureModule398Props) {
  return <section data-module="398" data-active={active} aria-label={label} className="generated-module generated-module-398">
    <div className="generated-module__hud"><span>MODULE 398</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
