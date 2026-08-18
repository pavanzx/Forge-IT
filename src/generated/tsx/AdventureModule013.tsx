import * as React from "react";

export type AdventureModule013Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule013({label="Forge-IT module",active=true,onAction}:AdventureModule013Props) {
  return <section data-module="013" data-active={active} aria-label={label} className="generated-module generated-module-013">
    <div className="generated-module__hud"><span>MODULE 013</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
