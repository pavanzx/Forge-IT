import * as React from "react";

export type AdventureModule127Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule127({label="Forge-IT module",active=true,onAction}:AdventureModule127Props) {
  return <section data-module="127" data-active={active} aria-label={label} className="generated-module generated-module-127">
    <div className="generated-module__hud"><span>MODULE 127</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
