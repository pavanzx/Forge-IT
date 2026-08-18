import * as React from "react";

export type AdventureModule410Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule410({label="Forge-IT module",active=true,onAction}:AdventureModule410Props) {
  return <section data-module="410" data-active={active} aria-label={label} className="generated-module generated-module-410">
    <div className="generated-module__hud"><span>MODULE 410</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
