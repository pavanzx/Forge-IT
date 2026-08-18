import * as React from "react";

export type AdventureModule192Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule192({label="Forge-IT module",active=true,onAction}:AdventureModule192Props) {
  return <section data-module="192" data-active={active} aria-label={label} className="generated-module generated-module-192">
    <div className="generated-module__hud"><span>MODULE 192</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
