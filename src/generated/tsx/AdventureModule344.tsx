import * as React from "react";

export type AdventureModule344Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule344({label="Forge-IT module",active=true,onAction}:AdventureModule344Props) {
  return <section data-module="344" data-active={active} aria-label={label} className="generated-module generated-module-344">
    <div className="generated-module__hud"><span>MODULE 344</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
