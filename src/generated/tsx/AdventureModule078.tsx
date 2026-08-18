import * as React from "react";

export type AdventureModule078Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule078({label="Forge-IT module",active=true,onAction}:AdventureModule078Props) {
  return <section data-module="078" data-active={active} aria-label={label} className="generated-module generated-module-078">
    <div className="generated-module__hud"><span>MODULE 078</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
