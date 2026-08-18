import * as React from "react";

export type AdventureModule202Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule202({label="Forge-IT module",active=true,onAction}:AdventureModule202Props) {
  return <section data-module="202" data-active={active} aria-label={label} className="generated-module generated-module-202">
    <div className="generated-module__hud"><span>MODULE 202</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
