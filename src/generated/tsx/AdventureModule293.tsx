import * as React from "react";

export type AdventureModule293Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule293({label="Forge-IT module",active=true,onAction}:AdventureModule293Props) {
  return <section data-module="293" data-active={active} aria-label={label} className="generated-module generated-module-293">
    <div className="generated-module__hud"><span>MODULE 293</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
