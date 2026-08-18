import * as React from "react";

export type AdventureModule195Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule195({label="Forge-IT module",active=true,onAction}:AdventureModule195Props) {
  return <section data-module="195" data-active={active} aria-label={label} className="generated-module generated-module-195">
    <div className="generated-module__hud"><span>MODULE 195</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
