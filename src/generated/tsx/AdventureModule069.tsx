import * as React from "react";

export type AdventureModule069Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule069({label="Forge-IT module",active=true,onAction}:AdventureModule069Props) {
  return <section data-module="069" data-active={active} aria-label={label} className="generated-module generated-module-069">
    <div className="generated-module__hud"><span>MODULE 069</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
