import * as React from "react";

export type AdventureModule065Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule065({label="Forge-IT module",active=true,onAction}:AdventureModule065Props) {
  return <section data-module="065" data-active={active} aria-label={label} className="generated-module generated-module-065">
    <div className="generated-module__hud"><span>MODULE 065</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
