import * as React from "react";

export type AdventureModule402Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule402({label="Forge-IT module",active=true,onAction}:AdventureModule402Props) {
  return <section data-module="402" data-active={active} aria-label={label} className="generated-module generated-module-402">
    <div className="generated-module__hud"><span>MODULE 402</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
