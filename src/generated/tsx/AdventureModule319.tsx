import * as React from "react";

export type AdventureModule319Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule319({label="Forge-IT module",active=true,onAction}:AdventureModule319Props) {
  return <section data-module="319" data-active={active} aria-label={label} className="generated-module generated-module-319">
    <div className="generated-module__hud"><span>MODULE 319</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
