import * as React from "react";

export type AdventureModule290Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule290({label="Forge-IT module",active=true,onAction}:AdventureModule290Props) {
  return <section data-module="290" data-active={active} aria-label={label} className="generated-module generated-module-290">
    <div className="generated-module__hud"><span>MODULE 290</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
