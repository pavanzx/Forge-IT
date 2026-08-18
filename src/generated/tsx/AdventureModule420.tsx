import * as React from "react";

export type AdventureModule420Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule420({label="Forge-IT module",active=true,onAction}:AdventureModule420Props) {
  return <section data-module="420" data-active={active} aria-label={label} className="generated-module generated-module-420">
    <div className="generated-module__hud"><span>MODULE 420</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
