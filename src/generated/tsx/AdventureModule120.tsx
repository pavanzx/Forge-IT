import * as React from "react";

export type AdventureModule120Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule120({label="Forge-IT module",active=true,onAction}:AdventureModule120Props) {
  return <section data-module="120" data-active={active} aria-label={label} className="generated-module generated-module-120">
    <div className="generated-module__hud"><span>MODULE 120</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
