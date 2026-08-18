import * as React from "react";

export type AdventureModule390Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule390({label="Forge-IT module",active=true,onAction}:AdventureModule390Props) {
  return <section data-module="390" data-active={active} aria-label={label} className="generated-module generated-module-390">
    <div className="generated-module__hud"><span>MODULE 390</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
