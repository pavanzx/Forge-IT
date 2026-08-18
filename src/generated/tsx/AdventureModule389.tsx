import * as React from "react";

export type AdventureModule389Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule389({label="Forge-IT module",active=true,onAction}:AdventureModule389Props) {
  return <section data-module="389" data-active={active} aria-label={label} className="generated-module generated-module-389">
    <div className="generated-module__hud"><span>MODULE 389</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
