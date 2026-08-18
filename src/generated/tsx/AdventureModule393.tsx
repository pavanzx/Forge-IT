import * as React from "react";

export type AdventureModule393Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule393({label="Forge-IT module",active=true,onAction}:AdventureModule393Props) {
  return <section data-module="393" data-active={active} aria-label={label} className="generated-module generated-module-393">
    <div className="generated-module__hud"><span>MODULE 393</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
