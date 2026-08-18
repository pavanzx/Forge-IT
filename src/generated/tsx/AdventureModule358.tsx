import * as React from "react";

export type AdventureModule358Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule358({label="Forge-IT module",active=true,onAction}:AdventureModule358Props) {
  return <section data-module="358" data-active={active} aria-label={label} className="generated-module generated-module-358">
    <div className="generated-module__hud"><span>MODULE 358</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
