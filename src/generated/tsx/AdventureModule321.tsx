import * as React from "react";

export type AdventureModule321Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule321({label="Forge-IT module",active=true,onAction}:AdventureModule321Props) {
  return <section data-module="321" data-active={active} aria-label={label} className="generated-module generated-module-321">
    <div className="generated-module__hud"><span>MODULE 321</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
