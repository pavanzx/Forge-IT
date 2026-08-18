import * as React from "react";

export type AdventureModule304Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule304({label="Forge-IT module",active=true,onAction}:AdventureModule304Props) {
  return <section data-module="304" data-active={active} aria-label={label} className="generated-module generated-module-304">
    <div className="generated-module__hud"><span>MODULE 304</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
