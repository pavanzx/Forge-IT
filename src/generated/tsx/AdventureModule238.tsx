import * as React from "react";

export type AdventureModule238Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule238({label="Forge-IT module",active=true,onAction}:AdventureModule238Props) {
  return <section data-module="238" data-active={active} aria-label={label} className="generated-module generated-module-238">
    <div className="generated-module__hud"><span>MODULE 238</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
