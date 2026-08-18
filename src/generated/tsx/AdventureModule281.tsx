import * as React from "react";

export type AdventureModule281Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule281({label="Forge-IT module",active=true,onAction}:AdventureModule281Props) {
  return <section data-module="281" data-active={active} aria-label={label} className="generated-module generated-module-281">
    <div className="generated-module__hud"><span>MODULE 281</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
