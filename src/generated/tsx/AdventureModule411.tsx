import * as React from "react";

export type AdventureModule411Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule411({label="Forge-IT module",active=true,onAction}:AdventureModule411Props) {
  return <section data-module="411" data-active={active} aria-label={label} className="generated-module generated-module-411">
    <div className="generated-module__hud"><span>MODULE 411</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
