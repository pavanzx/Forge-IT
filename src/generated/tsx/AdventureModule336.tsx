import * as React from "react";

export type AdventureModule336Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule336({label="Forge-IT module",active=true,onAction}:AdventureModule336Props) {
  return <section data-module="336" data-active={active} aria-label={label} className="generated-module generated-module-336">
    <div className="generated-module__hud"><span>MODULE 336</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
