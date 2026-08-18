import * as React from "react";

export type AdventureModule037Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule037({label="Forge-IT module",active=true,onAction}:AdventureModule037Props) {
  return <section data-module="037" data-active={active} aria-label={label} className="generated-module generated-module-037">
    <div className="generated-module__hud"><span>MODULE 037</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
