import * as React from "react";

export type AdventureModule380Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule380({label="Forge-IT module",active=true,onAction}:AdventureModule380Props) {
  return <section data-module="380" data-active={active} aria-label={label} className="generated-module generated-module-380">
    <div className="generated-module__hud"><span>MODULE 380</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
