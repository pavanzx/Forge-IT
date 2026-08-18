import * as React from "react";

export type AdventureModule176Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule176({label="Forge-IT module",active=true,onAction}:AdventureModule176Props) {
  return <section data-module="176" data-active={active} aria-label={label} className="generated-module generated-module-176">
    <div className="generated-module__hud"><span>MODULE 176</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
