import * as React from "react";

export type AdventureModule123Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule123({label="Forge-IT module",active=true,onAction}:AdventureModule123Props) {
  return <section data-module="123" data-active={active} aria-label={label} className="generated-module generated-module-123">
    <div className="generated-module__hud"><span>MODULE 123</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
