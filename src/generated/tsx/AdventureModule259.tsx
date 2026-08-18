import * as React from "react";

export type AdventureModule259Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule259({label="Forge-IT module",active=true,onAction}:AdventureModule259Props) {
  return <section data-module="259" data-active={active} aria-label={label} className="generated-module generated-module-259">
    <div className="generated-module__hud"><span>MODULE 259</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
