import * as React from "react";

export type AdventureModule256Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule256({label="Forge-IT module",active=true,onAction}:AdventureModule256Props) {
  return <section data-module="256" data-active={active} aria-label={label} className="generated-module generated-module-256">
    <div className="generated-module__hud"><span>MODULE 256</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
