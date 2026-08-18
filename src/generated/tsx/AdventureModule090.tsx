import * as React from "react";

export type AdventureModule090Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule090({label="Forge-IT module",active=true,onAction}:AdventureModule090Props) {
  return <section data-module="090" data-active={active} aria-label={label} className="generated-module generated-module-090">
    <div className="generated-module__hud"><span>MODULE 090</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
