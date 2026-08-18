import * as React from "react";

export type AdventureModule046Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule046({label="Forge-IT module",active=true,onAction}:AdventureModule046Props) {
  return <section data-module="046" data-active={active} aria-label={label} className="generated-module generated-module-046">
    <div className="generated-module__hud"><span>MODULE 046</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
