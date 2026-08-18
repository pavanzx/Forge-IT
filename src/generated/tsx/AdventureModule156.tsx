import * as React from "react";

export type AdventureModule156Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule156({label="Forge-IT module",active=true,onAction}:AdventureModule156Props) {
  return <section data-module="156" data-active={active} aria-label={label} className="generated-module generated-module-156">
    <div className="generated-module__hud"><span>MODULE 156</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
