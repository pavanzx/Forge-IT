import * as React from "react";

export type AdventureModule008Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule008({label="Forge-IT module",active=true,onAction}:AdventureModule008Props) {
  return <section data-module="008" data-active={active} aria-label={label} className="generated-module generated-module-008">
    <div className="generated-module__hud"><span>MODULE 008</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
