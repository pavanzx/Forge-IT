import * as React from "react";

export type AdventureModule095Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule095({label="Forge-IT module",active=true,onAction}:AdventureModule095Props) {
  return <section data-module="095" data-active={active} aria-label={label} className="generated-module generated-module-095">
    <div className="generated-module__hud"><span>MODULE 095</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
