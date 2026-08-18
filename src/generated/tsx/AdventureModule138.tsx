import * as React from "react";

export type AdventureModule138Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule138({label="Forge-IT module",active=true,onAction}:AdventureModule138Props) {
  return <section data-module="138" data-active={active} aria-label={label} className="generated-module generated-module-138">
    <div className="generated-module__hud"><span>MODULE 138</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
