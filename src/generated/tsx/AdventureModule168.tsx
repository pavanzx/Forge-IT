import * as React from "react";

export type AdventureModule168Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule168({label="Forge-IT module",active=true,onAction}:AdventureModule168Props) {
  return <section data-module="168" data-active={active} aria-label={label} className="generated-module generated-module-168">
    <div className="generated-module__hud"><span>MODULE 168</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
