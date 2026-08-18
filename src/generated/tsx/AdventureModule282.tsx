import * as React from "react";

export type AdventureModule282Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule282({label="Forge-IT module",active=true,onAction}:AdventureModule282Props) {
  return <section data-module="282" data-active={active} aria-label={label} className="generated-module generated-module-282">
    <div className="generated-module__hud"><span>MODULE 282</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
