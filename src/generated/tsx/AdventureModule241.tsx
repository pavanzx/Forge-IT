import * as React from "react";

export type AdventureModule241Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule241({label="Forge-IT module",active=true,onAction}:AdventureModule241Props) {
  return <section data-module="241" data-active={active} aria-label={label} className="generated-module generated-module-241">
    <div className="generated-module__hud"><span>MODULE 241</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
