import * as React from "react";

export type AdventureModule131Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule131({label="Forge-IT module",active=true,onAction}:AdventureModule131Props) {
  return <section data-module="131" data-active={active} aria-label={label} className="generated-module generated-module-131">
    <div className="generated-module__hud"><span>MODULE 131</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
