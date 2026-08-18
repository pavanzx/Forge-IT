import * as React from "react";

export type AdventureModule278Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule278({label="Forge-IT module",active=true,onAction}:AdventureModule278Props) {
  return <section data-module="278" data-active={active} aria-label={label} className="generated-module generated-module-278">
    <div className="generated-module__hud"><span>MODULE 278</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
