import * as React from "react";

export type AdventureModule331Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule331({label="Forge-IT module",active=true,onAction}:AdventureModule331Props) {
  return <section data-module="331" data-active={active} aria-label={label} className="generated-module generated-module-331">
    <div className="generated-module__hud"><span>MODULE 331</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
