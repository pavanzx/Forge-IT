import * as React from "react";

export type AdventureModule205Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule205({label="Forge-IT module",active=true,onAction}:AdventureModule205Props) {
  return <section data-module="205" data-active={active} aria-label={label} className="generated-module generated-module-205">
    <div className="generated-module__hud"><span>MODULE 205</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
