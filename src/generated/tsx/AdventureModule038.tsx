import * as React from "react";

export type AdventureModule038Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule038({label="Forge-IT module",active=true,onAction}:AdventureModule038Props) {
  return <section data-module="038" data-active={active} aria-label={label} className="generated-module generated-module-038">
    <div className="generated-module__hud"><span>MODULE 038</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
