import * as React from "react";

export type AdventureModule325Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule325({label="Forge-IT module",active=true,onAction}:AdventureModule325Props) {
  return <section data-module="325" data-active={active} aria-label={label} className="generated-module generated-module-325">
    <div className="generated-module__hud"><span>MODULE 325</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
