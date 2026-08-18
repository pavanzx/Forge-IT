import * as React from "react";

export type AdventureModule133Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule133({label="Forge-IT module",active=true,onAction}:AdventureModule133Props) {
  return <section data-module="133" data-active={active} aria-label={label} className="generated-module generated-module-133">
    <div className="generated-module__hud"><span>MODULE 133</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
