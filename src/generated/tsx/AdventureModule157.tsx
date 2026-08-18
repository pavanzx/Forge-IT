import * as React from "react";

export type AdventureModule157Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule157({label="Forge-IT module",active=true,onAction}:AdventureModule157Props) {
  return <section data-module="157" data-active={active} aria-label={label} className="generated-module generated-module-157">
    <div className="generated-module__hud"><span>MODULE 157</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
