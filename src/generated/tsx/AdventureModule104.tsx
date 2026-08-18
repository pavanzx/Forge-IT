import * as React from "react";

export type AdventureModule104Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule104({label="Forge-IT module",active=true,onAction}:AdventureModule104Props) {
  return <section data-module="104" data-active={active} aria-label={label} className="generated-module generated-module-104">
    <div className="generated-module__hud"><span>MODULE 104</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
