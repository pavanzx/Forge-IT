import * as React from "react";

export type AdventureModule199Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule199({label="Forge-IT module",active=true,onAction}:AdventureModule199Props) {
  return <section data-module="199" data-active={active} aria-label={label} className="generated-module generated-module-199">
    <div className="generated-module__hud"><span>MODULE 199</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
