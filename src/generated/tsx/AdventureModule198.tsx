import * as React from "react";

export type AdventureModule198Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule198({label="Forge-IT module",active=true,onAction}:AdventureModule198Props) {
  return <section data-module="198" data-active={active} aria-label={label} className="generated-module generated-module-198">
    <div className="generated-module__hud"><span>MODULE 198</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
