import * as React from "react";

export type AdventureModule024Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule024({label="Forge-IT module",active=true,onAction}:AdventureModule024Props) {
  return <section data-module="024" data-active={active} aria-label={label} className="generated-module generated-module-024">
    <div className="generated-module__hud"><span>MODULE 024</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
