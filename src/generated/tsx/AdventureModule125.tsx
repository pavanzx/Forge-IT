import * as React from "react";

export type AdventureModule125Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule125({label="Forge-IT module",active=true,onAction}:AdventureModule125Props) {
  return <section data-module="125" data-active={active} aria-label={label} className="generated-module generated-module-125">
    <div className="generated-module__hud"><span>MODULE 125</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
