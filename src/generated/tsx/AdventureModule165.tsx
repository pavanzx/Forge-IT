import * as React from "react";

export type AdventureModule165Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule165({label="Forge-IT module",active=true,onAction}:AdventureModule165Props) {
  return <section data-module="165" data-active={active} aria-label={label} className="generated-module generated-module-165">
    <div className="generated-module__hud"><span>MODULE 165</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
