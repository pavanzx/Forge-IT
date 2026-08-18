import * as React from "react";

export type AdventureModule386Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule386({label="Forge-IT module",active=true,onAction}:AdventureModule386Props) {
  return <section data-module="386" data-active={active} aria-label={label} className="generated-module generated-module-386">
    <div className="generated-module__hud"><span>MODULE 386</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
