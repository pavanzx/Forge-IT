import * as React from "react";

export type AdventureModule408Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule408({label="Forge-IT module",active=true,onAction}:AdventureModule408Props) {
  return <section data-module="408" data-active={active} aria-label={label} className="generated-module generated-module-408">
    <div className="generated-module__hud"><span>MODULE 408</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
