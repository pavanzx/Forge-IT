import * as React from "react";

export type AdventureModule073Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule073({label="Forge-IT module",active=true,onAction}:AdventureModule073Props) {
  return <section data-module="073" data-active={active} aria-label={label} className="generated-module generated-module-073">
    <div className="generated-module__hud"><span>MODULE 073</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
