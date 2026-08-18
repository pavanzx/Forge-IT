import * as React from "react";

export type AdventureModule187Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule187({label="Forge-IT module",active=true,onAction}:AdventureModule187Props) {
  return <section data-module="187" data-active={active} aria-label={label} className="generated-module generated-module-187">
    <div className="generated-module__hud"><span>MODULE 187</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
