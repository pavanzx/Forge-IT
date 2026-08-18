import * as React from "react";

export type AdventureModule163Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule163({label="Forge-IT module",active=true,onAction}:AdventureModule163Props) {
  return <section data-module="163" data-active={active} aria-label={label} className="generated-module generated-module-163">
    <div className="generated-module__hud"><span>MODULE 163</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
