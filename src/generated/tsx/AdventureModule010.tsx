import * as React from "react";

export type AdventureModule010Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule010({label="Forge-IT module",active=true,onAction}:AdventureModule010Props) {
  return <section data-module="010" data-active={active} aria-label={label} className="generated-module generated-module-010">
    <div className="generated-module__hud"><span>MODULE 010</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
