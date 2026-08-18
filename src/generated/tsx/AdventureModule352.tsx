import * as React from "react";

export type AdventureModule352Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule352({label="Forge-IT module",active=true,onAction}:AdventureModule352Props) {
  return <section data-module="352" data-active={active} aria-label={label} className="generated-module generated-module-352">
    <div className="generated-module__hud"><span>MODULE 352</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
