import * as React from "react";

export type AdventureModule116Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule116({label="Forge-IT module",active=true,onAction}:AdventureModule116Props) {
  return <section data-module="116" data-active={active} aria-label={label} className="generated-module generated-module-116">
    <div className="generated-module__hud"><span>MODULE 116</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
