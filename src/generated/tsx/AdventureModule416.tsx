import * as React from "react";

export type AdventureModule416Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule416({label="Forge-IT module",active=true,onAction}:AdventureModule416Props) {
  return <section data-module="416" data-active={active} aria-label={label} className="generated-module generated-module-416">
    <div className="generated-module__hud"><span>MODULE 416</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
