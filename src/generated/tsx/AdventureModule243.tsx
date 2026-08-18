import * as React from "react";

export type AdventureModule243Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule243({label="Forge-IT module",active=true,onAction}:AdventureModule243Props) {
  return <section data-module="243" data-active={active} aria-label={label} className="generated-module generated-module-243">
    <div className="generated-module__hud"><span>MODULE 243</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
