import * as React from "react";

export type AdventureModule223Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule223({label="Forge-IT module",active=true,onAction}:AdventureModule223Props) {
  return <section data-module="223" data-active={active} aria-label={label} className="generated-module generated-module-223">
    <div className="generated-module__hud"><span>MODULE 223</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
