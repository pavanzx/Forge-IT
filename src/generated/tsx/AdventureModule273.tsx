import * as React from "react";

export type AdventureModule273Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule273({label="Forge-IT module",active=true,onAction}:AdventureModule273Props) {
  return <section data-module="273" data-active={active} aria-label={label} className="generated-module generated-module-273">
    <div className="generated-module__hud"><span>MODULE 273</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
