import * as React from "react";

export type AdventureModule297Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule297({label="Forge-IT module",active=true,onAction}:AdventureModule297Props) {
  return <section data-module="297" data-active={active} aria-label={label} className="generated-module generated-module-297">
    <div className="generated-module__hud"><span>MODULE 297</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
