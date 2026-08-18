import * as React from "react";

export type AdventureModule296Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule296({label="Forge-IT module",active=true,onAction}:AdventureModule296Props) {
  return <section data-module="296" data-active={active} aria-label={label} className="generated-module generated-module-296">
    <div className="generated-module__hud"><span>MODULE 296</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
