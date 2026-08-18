import * as React from "react";

export type AdventureModule188Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule188({label="Forge-IT module",active=true,onAction}:AdventureModule188Props) {
  return <section data-module="188" data-active={active} aria-label={label} className="generated-module generated-module-188">
    <div className="generated-module__hud"><span>MODULE 188</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
