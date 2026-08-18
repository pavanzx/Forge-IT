import * as React from "react";

export type AdventureModule415Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule415({label="Forge-IT module",active=true,onAction}:AdventureModule415Props) {
  return <section data-module="415" data-active={active} aria-label={label} className="generated-module generated-module-415">
    <div className="generated-module__hud"><span>MODULE 415</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
