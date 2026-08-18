import * as React from "react";

export type AdventureModule183Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule183({label="Forge-IT module",active=true,onAction}:AdventureModule183Props) {
  return <section data-module="183" data-active={active} aria-label={label} className="generated-module generated-module-183">
    <div className="generated-module__hud"><span>MODULE 183</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
