import * as React from "react";

export type AdventureModule164Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule164({label="Forge-IT module",active=true,onAction}:AdventureModule164Props) {
  return <section data-module="164" data-active={active} aria-label={label} className="generated-module generated-module-164">
    <div className="generated-module__hud"><span>MODULE 164</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
