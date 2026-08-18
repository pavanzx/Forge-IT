import * as React from "react";

export type AdventureModule020Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule020({label="Forge-IT module",active=true,onAction}:AdventureModule020Props) {
  return <section data-module="020" data-active={active} aria-label={label} className="generated-module generated-module-020">
    <div className="generated-module__hud"><span>MODULE 020</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
