import * as React from "react";

export type AdventureModule209Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule209({label="Forge-IT module",active=true,onAction}:AdventureModule209Props) {
  return <section data-module="209" data-active={active} aria-label={label} className="generated-module generated-module-209">
    <div className="generated-module__hud"><span>MODULE 209</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
