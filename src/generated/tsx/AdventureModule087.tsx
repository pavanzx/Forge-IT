import * as React from "react";

export type AdventureModule087Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule087({label="Forge-IT module",active=true,onAction}:AdventureModule087Props) {
  return <section data-module="087" data-active={active} aria-label={label} className="generated-module generated-module-087">
    <div className="generated-module__hud"><span>MODULE 087</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
