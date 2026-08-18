import * as React from "react";

export type AdventureModule057Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule057({label="Forge-IT module",active=true,onAction}:AdventureModule057Props) {
  return <section data-module="057" data-active={active} aria-label={label} className="generated-module generated-module-057">
    <div className="generated-module__hud"><span>MODULE 057</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
