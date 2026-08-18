import * as React from "react";

export type AdventureModule113Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule113({label="Forge-IT module",active=true,onAction}:AdventureModule113Props) {
  return <section data-module="113" data-active={active} aria-label={label} className="generated-module generated-module-113">
    <div className="generated-module__hud"><span>MODULE 113</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
