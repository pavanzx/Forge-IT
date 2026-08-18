import * as React from "react";

export type AdventureModule174Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule174({label="Forge-IT module",active=true,onAction}:AdventureModule174Props) {
  return <section data-module="174" data-active={active} aria-label={label} className="generated-module generated-module-174">
    <div className="generated-module__hud"><span>MODULE 174</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
