import * as React from "react";

export type AdventureModule158Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule158({label="Forge-IT module",active=true,onAction}:AdventureModule158Props) {
  return <section data-module="158" data-active={active} aria-label={label} className="generated-module generated-module-158">
    <div className="generated-module__hud"><span>MODULE 158</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
