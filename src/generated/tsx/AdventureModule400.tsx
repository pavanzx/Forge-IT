import * as React from "react";

export type AdventureModule400Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule400({label="Forge-IT module",active=true,onAction}:AdventureModule400Props) {
  return <section data-module="400" data-active={active} aria-label={label} className="generated-module generated-module-400">
    <div className="generated-module__hud"><span>MODULE 400</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
