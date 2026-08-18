import * as React from "react";

export type AdventureModule229Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule229({label="Forge-IT module",active=true,onAction}:AdventureModule229Props) {
  return <section data-module="229" data-active={active} aria-label={label} className="generated-module generated-module-229">
    <div className="generated-module__hud"><span>MODULE 229</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
