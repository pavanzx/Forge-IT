import * as React from "react";

export type AdventureModule284Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule284({label="Forge-IT module",active=true,onAction}:AdventureModule284Props) {
  return <section data-module="284" data-active={active} aria-label={label} className="generated-module generated-module-284">
    <div className="generated-module__hud"><span>MODULE 284</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
