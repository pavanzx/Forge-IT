import * as React from "react";

export type AdventureModule283Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule283({label="Forge-IT module",active=true,onAction}:AdventureModule283Props) {
  return <section data-module="283" data-active={active} aria-label={label} className="generated-module generated-module-283">
    <div className="generated-module__hud"><span>MODULE 283</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
