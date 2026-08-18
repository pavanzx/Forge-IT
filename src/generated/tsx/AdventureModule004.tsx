import * as React from "react";

export type AdventureModule004Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule004({label="Forge-IT module",active=true,onAction}:AdventureModule004Props) {
  return <section data-module="004" data-active={active} aria-label={label} className="generated-module generated-module-004">
    <div className="generated-module__hud"><span>MODULE 004</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
