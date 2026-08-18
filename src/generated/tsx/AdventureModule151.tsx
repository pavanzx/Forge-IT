import * as React from "react";

export type AdventureModule151Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule151({label="Forge-IT module",active=true,onAction}:AdventureModule151Props) {
  return <section data-module="151" data-active={active} aria-label={label} className="generated-module generated-module-151">
    <div className="generated-module__hud"><span>MODULE 151</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
