import * as React from "react";

export type AdventureModule031Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule031({label="Forge-IT module",active=true,onAction}:AdventureModule031Props) {
  return <section data-module="031" data-active={active} aria-label={label} className="generated-module generated-module-031">
    <div className="generated-module__hud"><span>MODULE 031</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
