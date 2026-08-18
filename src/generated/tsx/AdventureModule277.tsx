import * as React from "react";

export type AdventureModule277Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule277({label="Forge-IT module",active=true,onAction}:AdventureModule277Props) {
  return <section data-module="277" data-active={active} aria-label={label} className="generated-module generated-module-277">
    <div className="generated-module__hud"><span>MODULE 277</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
