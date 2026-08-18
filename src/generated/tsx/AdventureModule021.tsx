import * as React from "react";

export type AdventureModule021Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule021({label="Forge-IT module",active=true,onAction}:AdventureModule021Props) {
  return <section data-module="021" data-active={active} aria-label={label} className="generated-module generated-module-021">
    <div className="generated-module__hud"><span>MODULE 021</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
