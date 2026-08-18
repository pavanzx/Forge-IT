import * as React from "react";

export type AdventureModule139Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule139({label="Forge-IT module",active=true,onAction}:AdventureModule139Props) {
  return <section data-module="139" data-active={active} aria-label={label} className="generated-module generated-module-139">
    <div className="generated-module__hud"><span>MODULE 139</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
