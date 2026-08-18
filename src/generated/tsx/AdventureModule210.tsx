import * as React from "react";

export type AdventureModule210Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule210({label="Forge-IT module",active=true,onAction}:AdventureModule210Props) {
  return <section data-module="210" data-active={active} aria-label={label} className="generated-module generated-module-210">
    <div className="generated-module__hud"><span>MODULE 210</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
