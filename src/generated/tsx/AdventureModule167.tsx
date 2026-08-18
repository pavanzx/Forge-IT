import * as React from "react";

export type AdventureModule167Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule167({label="Forge-IT module",active=true,onAction}:AdventureModule167Props) {
  return <section data-module="167" data-active={active} aria-label={label} className="generated-module generated-module-167">
    <div className="generated-module__hud"><span>MODULE 167</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
