import * as React from "react";

export type AdventureModule181Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule181({label="Forge-IT module",active=true,onAction}:AdventureModule181Props) {
  return <section data-module="181" data-active={active} aria-label={label} className="generated-module generated-module-181">
    <div className="generated-module__hud"><span>MODULE 181</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
