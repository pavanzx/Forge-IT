import * as React from "react";

export type AdventureModule414Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule414({label="Forge-IT module",active=true,onAction}:AdventureModule414Props) {
  return <section data-module="414" data-active={active} aria-label={label} className="generated-module generated-module-414">
    <div className="generated-module__hud"><span>MODULE 414</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
