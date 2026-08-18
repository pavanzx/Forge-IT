import * as React from "react";

export type AdventureModule330Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule330({label="Forge-IT module",active=true,onAction}:AdventureModule330Props) {
  return <section data-module="330" data-active={active} aria-label={label} className="generated-module generated-module-330">
    <div className="generated-module__hud"><span>MODULE 330</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
