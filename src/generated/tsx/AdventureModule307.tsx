import * as React from "react";

export type AdventureModule307Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule307({label="Forge-IT module",active=true,onAction}:AdventureModule307Props) {
  return <section data-module="307" data-active={active} aria-label={label} className="generated-module generated-module-307">
    <div className="generated-module__hud"><span>MODULE 307</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
