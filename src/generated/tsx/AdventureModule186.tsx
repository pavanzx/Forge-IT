import * as React from "react";

export type AdventureModule186Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule186({label="Forge-IT module",active=true,onAction}:AdventureModule186Props) {
  return <section data-module="186" data-active={active} aria-label={label} className="generated-module generated-module-186">
    <div className="generated-module__hud"><span>MODULE 186</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
