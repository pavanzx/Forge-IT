import * as React from "react";

export type AdventureModule079Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule079({label="Forge-IT module",active=true,onAction}:AdventureModule079Props) {
  return <section data-module="079" data-active={active} aria-label={label} className="generated-module generated-module-079">
    <div className="generated-module__hud"><span>MODULE 079</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
