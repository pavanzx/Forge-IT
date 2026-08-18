import * as React from "react";

export type AdventureModule353Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule353({label="Forge-IT module",active=true,onAction}:AdventureModule353Props) {
  return <section data-module="353" data-active={active} aria-label={label} className="generated-module generated-module-353">
    <div className="generated-module__hud"><span>MODULE 353</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
