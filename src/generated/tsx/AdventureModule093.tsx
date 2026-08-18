import * as React from "react";

export type AdventureModule093Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule093({label="Forge-IT module",active=true,onAction}:AdventureModule093Props) {
  return <section data-module="093" data-active={active} aria-label={label} className="generated-module generated-module-093">
    <div className="generated-module__hud"><span>MODULE 093</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
