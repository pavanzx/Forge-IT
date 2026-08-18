import * as React from "react";

export type AdventureModule271Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule271({label="Forge-IT module",active=true,onAction}:AdventureModule271Props) {
  return <section data-module="271" data-active={active} aria-label={label} className="generated-module generated-module-271">
    <div className="generated-module__hud"><span>MODULE 271</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
