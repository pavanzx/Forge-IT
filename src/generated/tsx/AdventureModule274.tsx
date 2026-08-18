import * as React from "react";

export type AdventureModule274Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule274({label="Forge-IT module",active=true,onAction}:AdventureModule274Props) {
  return <section data-module="274" data-active={active} aria-label={label} className="generated-module generated-module-274">
    <div className="generated-module__hud"><span>MODULE 274</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
