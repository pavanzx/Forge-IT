import * as React from "react";

export type AdventureModule007Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule007({label="Forge-IT module",active=true,onAction}:AdventureModule007Props) {
  return <section data-module="007" data-active={active} aria-label={label} className="generated-module generated-module-007">
    <div className="generated-module__hud"><span>MODULE 007</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
