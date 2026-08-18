import * as React from "react";

export type AdventureModule193Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule193({label="Forge-IT module",active=true,onAction}:AdventureModule193Props) {
  return <section data-module="193" data-active={active} aria-label={label} className="generated-module generated-module-193">
    <div className="generated-module__hud"><span>MODULE 193</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
