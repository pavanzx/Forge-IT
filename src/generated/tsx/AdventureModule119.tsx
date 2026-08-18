import * as React from "react";

export type AdventureModule119Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule119({label="Forge-IT module",active=true,onAction}:AdventureModule119Props) {
  return <section data-module="119" data-active={active} aria-label={label} className="generated-module generated-module-119">
    <div className="generated-module__hud"><span>MODULE 119</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
