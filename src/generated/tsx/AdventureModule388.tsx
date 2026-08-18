import * as React from "react";

export type AdventureModule388Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule388({label="Forge-IT module",active=true,onAction}:AdventureModule388Props) {
  return <section data-module="388" data-active={active} aria-label={label} className="generated-module generated-module-388">
    <div className="generated-module__hud"><span>MODULE 388</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
