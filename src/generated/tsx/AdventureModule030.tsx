import * as React from "react";

export type AdventureModule030Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule030({label="Forge-IT module",active=true,onAction}:AdventureModule030Props) {
  return <section data-module="030" data-active={active} aria-label={label} className="generated-module generated-module-030">
    <div className="generated-module__hud"><span>MODULE 030</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
