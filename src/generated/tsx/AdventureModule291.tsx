import * as React from "react";

export type AdventureModule291Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule291({label="Forge-IT module",active=true,onAction}:AdventureModule291Props) {
  return <section data-module="291" data-active={active} aria-label={label} className="generated-module generated-module-291">
    <div className="generated-module__hud"><span>MODULE 291</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
