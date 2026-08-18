import * as React from "react";

export type AdventureModule154Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule154({label="Forge-IT module",active=true,onAction}:AdventureModule154Props) {
  return <section data-module="154" data-active={active} aria-label={label} className="generated-module generated-module-154">
    <div className="generated-module__hud"><span>MODULE 154</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
