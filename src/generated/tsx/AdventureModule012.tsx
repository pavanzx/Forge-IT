import * as React from "react";

export type AdventureModule012Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule012({label="Forge-IT module",active=true,onAction}:AdventureModule012Props) {
  return <section data-module="012" data-active={active} aria-label={label} className="generated-module generated-module-012">
    <div className="generated-module__hud"><span>MODULE 012</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
