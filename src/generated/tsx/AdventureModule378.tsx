import * as React from "react";

export type AdventureModule378Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule378({label="Forge-IT module",active=true,onAction}:AdventureModule378Props) {
  return <section data-module="378" data-active={active} aria-label={label} className="generated-module generated-module-378">
    <div className="generated-module__hud"><span>MODULE 378</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
