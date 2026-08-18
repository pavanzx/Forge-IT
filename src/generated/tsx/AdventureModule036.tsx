import * as React from "react";

export type AdventureModule036Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule036({label="Forge-IT module",active=true,onAction}:AdventureModule036Props) {
  return <section data-module="036" data-active={active} aria-label={label} className="generated-module generated-module-036">
    <div className="generated-module__hud"><span>MODULE 036</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
