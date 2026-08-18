import * as React from "react";

export type AdventureModule177Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule177({label="Forge-IT module",active=true,onAction}:AdventureModule177Props) {
  return <section data-module="177" data-active={active} aria-label={label} className="generated-module generated-module-177">
    <div className="generated-module__hud"><span>MODULE 177</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
