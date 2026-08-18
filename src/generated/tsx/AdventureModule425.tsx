import * as React from "react";

export type AdventureModule425Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule425({label="Forge-IT module",active=true,onAction}:AdventureModule425Props) {
  return <section data-module="425" data-active={active} aria-label={label} className="generated-module generated-module-425">
    <div className="generated-module__hud"><span>MODULE 425</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
