import * as React from "react";

export type AdventureModule332Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule332({label="Forge-IT module",active=true,onAction}:AdventureModule332Props) {
  return <section data-module="332" data-active={active} aria-label={label} className="generated-module generated-module-332">
    <div className="generated-module__hud"><span>MODULE 332</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
