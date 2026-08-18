import * as React from "react";

export type AdventureModule226Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule226({label="Forge-IT module",active=true,onAction}:AdventureModule226Props) {
  return <section data-module="226" data-active={active} aria-label={label} className="generated-module generated-module-226">
    <div className="generated-module__hud"><span>MODULE 226</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
