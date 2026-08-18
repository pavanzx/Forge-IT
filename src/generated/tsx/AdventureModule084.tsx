import * as React from "react";

export type AdventureModule084Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule084({label="Forge-IT module",active=true,onAction}:AdventureModule084Props) {
  return <section data-module="084" data-active={active} aria-label={label} className="generated-module generated-module-084">
    <div className="generated-module__hud"><span>MODULE 084</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
