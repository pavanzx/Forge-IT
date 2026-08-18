import * as React from "react";

export type AdventureModule377Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule377({label="Forge-IT module",active=true,onAction}:AdventureModule377Props) {
  return <section data-module="377" data-active={active} aria-label={label} className="generated-module generated-module-377">
    <div className="generated-module__hud"><span>MODULE 377</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
