import * as React from "react";

export type AdventureModule222Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule222({label="Forge-IT module",active=true,onAction}:AdventureModule222Props) {
  return <section data-module="222" data-active={active} aria-label={label} className="generated-module generated-module-222">
    <div className="generated-module__hud"><span>MODULE 222</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
