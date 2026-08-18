import * as React from "react";

export type AdventureModule197Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule197({label="Forge-IT module",active=true,onAction}:AdventureModule197Props) {
  return <section data-module="197" data-active={active} aria-label={label} className="generated-module generated-module-197">
    <div className="generated-module__hud"><span>MODULE 197</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
