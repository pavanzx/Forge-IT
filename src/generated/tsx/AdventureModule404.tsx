import * as React from "react";

export type AdventureModule404Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule404({label="Forge-IT module",active=true,onAction}:AdventureModule404Props) {
  return <section data-module="404" data-active={active} aria-label={label} className="generated-module generated-module-404">
    <div className="generated-module__hud"><span>MODULE 404</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
