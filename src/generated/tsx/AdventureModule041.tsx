import * as React from "react";

export type AdventureModule041Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule041({label="Forge-IT module",active=true,onAction}:AdventureModule041Props) {
  return <section data-module="041" data-active={active} aria-label={label} className="generated-module generated-module-041">
    <div className="generated-module__hud"><span>MODULE 041</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
