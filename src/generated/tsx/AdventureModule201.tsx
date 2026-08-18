import * as React from "react";

export type AdventureModule201Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule201({label="Forge-IT module",active=true,onAction}:AdventureModule201Props) {
  return <section data-module="201" data-active={active} aria-label={label} className="generated-module generated-module-201">
    <div className="generated-module__hud"><span>MODULE 201</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
