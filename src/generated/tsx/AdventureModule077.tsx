import * as React from "react";

export type AdventureModule077Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule077({label="Forge-IT module",active=true,onAction}:AdventureModule077Props) {
  return <section data-module="077" data-active={active} aria-label={label} className="generated-module generated-module-077">
    <div className="generated-module__hud"><span>MODULE 077</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
