import * as React from "react";

export type AdventureModule064Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule064({label="Forge-IT module",active=true,onAction}:AdventureModule064Props) {
  return <section data-module="064" data-active={active} aria-label={label} className="generated-module generated-module-064">
    <div className="generated-module__hud"><span>MODULE 064</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
