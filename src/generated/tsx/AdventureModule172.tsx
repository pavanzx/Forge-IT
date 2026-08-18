import * as React from "react";

export type AdventureModule172Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule172({label="Forge-IT module",active=true,onAction}:AdventureModule172Props) {
  return <section data-module="172" data-active={active} aria-label={label} className="generated-module generated-module-172">
    <div className="generated-module__hud"><span>MODULE 172</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
