import * as React from "react";

export type AdventureModule235Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule235({label="Forge-IT module",active=true,onAction}:AdventureModule235Props) {
  return <section data-module="235" data-active={active} aria-label={label} className="generated-module generated-module-235">
    <div className="generated-module__hud"><span>MODULE 235</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
