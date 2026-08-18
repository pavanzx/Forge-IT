import * as React from "react";

export type AdventureModule070Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule070({label="Forge-IT module",active=true,onAction}:AdventureModule070Props) {
  return <section data-module="070" data-active={active} aria-label={label} className="generated-module generated-module-070">
    <div className="generated-module__hud"><span>MODULE 070</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
