import * as React from "react";

export type AdventureModule360Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule360({label="Forge-IT module",active=true,onAction}:AdventureModule360Props) {
  return <section data-module="360" data-active={active} aria-label={label} className="generated-module generated-module-360">
    <div className="generated-module__hud"><span>MODULE 360</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
