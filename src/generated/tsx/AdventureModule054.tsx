import * as React from "react";

export type AdventureModule054Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule054({label="Forge-IT module",active=true,onAction}:AdventureModule054Props) {
  return <section data-module="054" data-active={active} aria-label={label} className="generated-module generated-module-054">
    <div className="generated-module__hud"><span>MODULE 054</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
