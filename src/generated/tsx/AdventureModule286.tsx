import * as React from "react";

export type AdventureModule286Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule286({label="Forge-IT module",active=true,onAction}:AdventureModule286Props) {
  return <section data-module="286" data-active={active} aria-label={label} className="generated-module generated-module-286">
    <div className="generated-module__hud"><span>MODULE 286</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
