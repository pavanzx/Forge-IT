import * as React from "react";

export type AdventureModule074Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule074({label="Forge-IT module",active=true,onAction}:AdventureModule074Props) {
  return <section data-module="074" data-active={active} aria-label={label} className="generated-module generated-module-074">
    <div className="generated-module__hud"><span>MODULE 074</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
