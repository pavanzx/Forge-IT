import * as React from "react";

export type AdventureModule221Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule221({label="Forge-IT module",active=true,onAction}:AdventureModule221Props) {
  return <section data-module="221" data-active={active} aria-label={label} className="generated-module generated-module-221">
    <div className="generated-module__hud"><span>MODULE 221</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
