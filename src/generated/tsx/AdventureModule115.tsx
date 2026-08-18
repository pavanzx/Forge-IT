import * as React from "react";

export type AdventureModule115Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule115({label="Forge-IT module",active=true,onAction}:AdventureModule115Props) {
  return <section data-module="115" data-active={active} aria-label={label} className="generated-module generated-module-115">
    <div className="generated-module__hud"><span>MODULE 115</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
