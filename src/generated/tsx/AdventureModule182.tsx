import * as React from "react";

export type AdventureModule182Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule182({label="Forge-IT module",active=true,onAction}:AdventureModule182Props) {
  return <section data-module="182" data-active={active} aria-label={label} className="generated-module generated-module-182">
    <div className="generated-module__hud"><span>MODULE 182</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
