import * as React from "react";

export type AdventureModule153Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule153({label="Forge-IT module",active=true,onAction}:AdventureModule153Props) {
  return <section data-module="153" data-active={active} aria-label={label} className="generated-module generated-module-153">
    <div className="generated-module__hud"><span>MODULE 153</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
