import * as React from "react";

export type AdventureModule034Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule034({label="Forge-IT module",active=true,onAction}:AdventureModule034Props) {
  return <section data-module="034" data-active={active} aria-label={label} className="generated-module generated-module-034">
    <div className="generated-module__hud"><span>MODULE 034</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
