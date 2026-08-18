import * as React from "react";

export type AdventureModule091Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule091({label="Forge-IT module",active=true,onAction}:AdventureModule091Props) {
  return <section data-module="091" data-active={active} aria-label={label} className="generated-module generated-module-091">
    <div className="generated-module__hud"><span>MODULE 091</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
