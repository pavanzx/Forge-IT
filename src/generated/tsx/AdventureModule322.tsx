import * as React from "react";

export type AdventureModule322Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule322({label="Forge-IT module",active=true,onAction}:AdventureModule322Props) {
  return <section data-module="322" data-active={active} aria-label={label} className="generated-module generated-module-322">
    <div className="generated-module__hud"><span>MODULE 322</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
