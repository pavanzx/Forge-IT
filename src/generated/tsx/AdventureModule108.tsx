import * as React from "react";

export type AdventureModule108Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule108({label="Forge-IT module",active=true,onAction}:AdventureModule108Props) {
  return <section data-module="108" data-active={active} aria-label={label} className="generated-module generated-module-108">
    <div className="generated-module__hud"><span>MODULE 108</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
