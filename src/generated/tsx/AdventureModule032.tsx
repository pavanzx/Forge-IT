import * as React from "react";

export type AdventureModule032Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule032({label="Forge-IT module",active=true,onAction}:AdventureModule032Props) {
  return <section data-module="032" data-active={active} aria-label={label} className="generated-module generated-module-032">
    <div className="generated-module__hud"><span>MODULE 032</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
