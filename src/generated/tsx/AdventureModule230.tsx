import * as React from "react";

export type AdventureModule230Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule230({label="Forge-IT module",active=true,onAction}:AdventureModule230Props) {
  return <section data-module="230" data-active={active} aria-label={label} className="generated-module generated-module-230">
    <div className="generated-module__hud"><span>MODULE 230</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
