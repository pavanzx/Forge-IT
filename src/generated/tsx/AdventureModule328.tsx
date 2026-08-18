import * as React from "react";

export type AdventureModule328Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule328({label="Forge-IT module",active=true,onAction}:AdventureModule328Props) {
  return <section data-module="328" data-active={active} aria-label={label} className="generated-module generated-module-328">
    <div className="generated-module__hud"><span>MODULE 328</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
