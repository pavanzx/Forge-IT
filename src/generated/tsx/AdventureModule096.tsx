import * as React from "react";

export type AdventureModule096Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule096({label="Forge-IT module",active=true,onAction}:AdventureModule096Props) {
  return <section data-module="096" data-active={active} aria-label={label} className="generated-module generated-module-096">
    <div className="generated-module__hud"><span>MODULE 096</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
