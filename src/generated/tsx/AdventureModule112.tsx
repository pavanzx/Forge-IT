import * as React from "react";

export type AdventureModule112Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule112({label="Forge-IT module",active=true,onAction}:AdventureModule112Props) {
  return <section data-module="112" data-active={active} aria-label={label} className="generated-module generated-module-112">
    <div className="generated-module__hud"><span>MODULE 112</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
