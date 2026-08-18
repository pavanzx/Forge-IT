import * as React from "react";

export type AdventureModule152Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule152({label="Forge-IT module",active=true,onAction}:AdventureModule152Props) {
  return <section data-module="152" data-active={active} aria-label={label} className="generated-module generated-module-152">
    <div className="generated-module__hud"><span>MODULE 152</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
