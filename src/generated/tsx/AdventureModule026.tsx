import * as React from "react";

export type AdventureModule026Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule026({label="Forge-IT module",active=true,onAction}:AdventureModule026Props) {
  return <section data-module="026" data-active={active} aria-label={label} className="generated-module generated-module-026">
    <div className="generated-module__hud"><span>MODULE 026</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
