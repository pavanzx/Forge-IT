import * as React from "react";

export type AdventureModule051Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule051({label="Forge-IT module",active=true,onAction}:AdventureModule051Props) {
  return <section data-module="051" data-active={active} aria-label={label} className="generated-module generated-module-051">
    <div className="generated-module__hud"><span>MODULE 051</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
