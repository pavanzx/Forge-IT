import * as React from "react";

export type AdventureModule175Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule175({label="Forge-IT module",active=true,onAction}:AdventureModule175Props) {
  return <section data-module="175" data-active={active} aria-label={label} className="generated-module generated-module-175">
    <div className="generated-module__hud"><span>MODULE 175</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
