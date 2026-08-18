import * as React from "react";

export type AdventureModule248Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule248({label="Forge-IT module",active=true,onAction}:AdventureModule248Props) {
  return <section data-module="248" data-active={active} aria-label={label} className="generated-module generated-module-248">
    <div className="generated-module__hud"><span>MODULE 248</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
