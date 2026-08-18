import * as React from "react";

export type AdventureModule146Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule146({label="Forge-IT module",active=true,onAction}:AdventureModule146Props) {
  return <section data-module="146" data-active={active} aria-label={label} className="generated-module generated-module-146">
    <div className="generated-module__hud"><span>MODULE 146</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
