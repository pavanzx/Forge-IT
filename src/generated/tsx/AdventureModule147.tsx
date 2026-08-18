import * as React from "react";

export type AdventureModule147Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule147({label="Forge-IT module",active=true,onAction}:AdventureModule147Props) {
  return <section data-module="147" data-active={active} aria-label={label} className="generated-module generated-module-147">
    <div className="generated-module__hud"><span>MODULE 147</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
