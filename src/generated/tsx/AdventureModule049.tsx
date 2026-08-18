import * as React from "react";

export type AdventureModule049Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule049({label="Forge-IT module",active=true,onAction}:AdventureModule049Props) {
  return <section data-module="049" data-active={active} aria-label={label} className="generated-module generated-module-049">
    <div className="generated-module__hud"><span>MODULE 049</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
