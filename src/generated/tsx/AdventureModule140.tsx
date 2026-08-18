import * as React from "react";

export type AdventureModule140Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule140({label="Forge-IT module",active=true,onAction}:AdventureModule140Props) {
  return <section data-module="140" data-active={active} aria-label={label} className="generated-module generated-module-140">
    <div className="generated-module__hud"><span>MODULE 140</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
