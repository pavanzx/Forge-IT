import * as React from "react";

export type AdventureModule228Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule228({label="Forge-IT module",active=true,onAction}:AdventureModule228Props) {
  return <section data-module="228" data-active={active} aria-label={label} className="generated-module generated-module-228">
    <div className="generated-module__hud"><span>MODULE 228</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
