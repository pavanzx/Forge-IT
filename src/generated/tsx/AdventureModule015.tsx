import * as React from "react";

export type AdventureModule015Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule015({label="Forge-IT module",active=true,onAction}:AdventureModule015Props) {
  return <section data-module="015" data-active={active} aria-label={label} className="generated-module generated-module-015">
    <div className="generated-module__hud"><span>MODULE 015</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
