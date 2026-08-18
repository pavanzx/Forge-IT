import * as React from "react";

export type AdventureModule429Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule429({label="Forge-IT module",active=true,onAction}:AdventureModule429Props) {
  return <section data-module="429" data-active={active} aria-label={label} className="generated-module generated-module-429">
    <div className="generated-module__hud"><span>MODULE 429</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
