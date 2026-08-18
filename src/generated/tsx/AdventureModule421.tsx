import * as React from "react";

export type AdventureModule421Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule421({label="Forge-IT module",active=true,onAction}:AdventureModule421Props) {
  return <section data-module="421" data-active={active} aria-label={label} className="generated-module generated-module-421">
    <div className="generated-module__hud"><span>MODULE 421</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
