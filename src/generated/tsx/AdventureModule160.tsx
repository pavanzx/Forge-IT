import * as React from "react";

export type AdventureModule160Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule160({label="Forge-IT module",active=true,onAction}:AdventureModule160Props) {
  return <section data-module="160" data-active={active} aria-label={label} className="generated-module generated-module-160">
    <div className="generated-module__hud"><span>MODULE 160</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
