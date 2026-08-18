import * as React from "react";

export type AdventureModule317Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule317({label="Forge-IT module",active=true,onAction}:AdventureModule317Props) {
  return <section data-module="317" data-active={active} aria-label={label} className="generated-module generated-module-317">
    <div className="generated-module__hud"><span>MODULE 317</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
