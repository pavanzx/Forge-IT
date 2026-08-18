import * as React from "react";

export type AdventureModule149Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule149({label="Forge-IT module",active=true,onAction}:AdventureModule149Props) {
  return <section data-module="149" data-active={active} aria-label={label} className="generated-module generated-module-149">
    <div className="generated-module__hud"><span>MODULE 149</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
