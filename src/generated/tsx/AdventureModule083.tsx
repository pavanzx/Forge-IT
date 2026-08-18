import * as React from "react";

export type AdventureModule083Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule083({label="Forge-IT module",active=true,onAction}:AdventureModule083Props) {
  return <section data-module="083" data-active={active} aria-label={label} className="generated-module generated-module-083">
    <div className="generated-module__hud"><span>MODULE 083</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
