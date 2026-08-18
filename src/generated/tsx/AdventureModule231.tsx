import * as React from "react";

export type AdventureModule231Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule231({label="Forge-IT module",active=true,onAction}:AdventureModule231Props) {
  return <section data-module="231" data-active={active} aria-label={label} className="generated-module generated-module-231">
    <div className="generated-module__hud"><span>MODULE 231</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
