import * as React from "react";

export type AdventureModule068Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule068({label="Forge-IT module",active=true,onAction}:AdventureModule068Props) {
  return <section data-module="068" data-active={active} aria-label={label} className="generated-module generated-module-068">
    <div className="generated-module__hud"><span>MODULE 068</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
