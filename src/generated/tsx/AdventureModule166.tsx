import * as React from "react";

export type AdventureModule166Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule166({label="Forge-IT module",active=true,onAction}:AdventureModule166Props) {
  return <section data-module="166" data-active={active} aria-label={label} className="generated-module generated-module-166">
    <div className="generated-module__hud"><span>MODULE 166</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
