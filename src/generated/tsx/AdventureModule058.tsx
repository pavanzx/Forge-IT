import * as React from "react";

export type AdventureModule058Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule058({label="Forge-IT module",active=true,onAction}:AdventureModule058Props) {
  return <section data-module="058" data-active={active} aria-label={label} className="generated-module generated-module-058">
    <div className="generated-module__hud"><span>MODULE 058</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
