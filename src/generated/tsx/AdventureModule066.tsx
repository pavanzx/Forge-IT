import * as React from "react";

export type AdventureModule066Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule066({label="Forge-IT module",active=true,onAction}:AdventureModule066Props) {
  return <section data-module="066" data-active={active} aria-label={label} className="generated-module generated-module-066">
    <div className="generated-module__hud"><span>MODULE 066</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
