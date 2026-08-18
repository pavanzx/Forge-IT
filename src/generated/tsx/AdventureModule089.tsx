import * as React from "react";

export type AdventureModule089Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule089({label="Forge-IT module",active=true,onAction}:AdventureModule089Props) {
  return <section data-module="089" data-active={active} aria-label={label} className="generated-module generated-module-089">
    <div className="generated-module__hud"><span>MODULE 089</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
