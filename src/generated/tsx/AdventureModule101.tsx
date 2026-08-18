import * as React from "react";

export type AdventureModule101Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule101({label="Forge-IT module",active=true,onAction}:AdventureModule101Props) {
  return <section data-module="101" data-active={active} aria-label={label} className="generated-module generated-module-101">
    <div className="generated-module__hud"><span>MODULE 101</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
