import * as React from "react";

export type AdventureModule320Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule320({label="Forge-IT module",active=true,onAction}:AdventureModule320Props) {
  return <section data-module="320" data-active={active} aria-label={label} className="generated-module generated-module-320">
    <div className="generated-module__hud"><span>MODULE 320</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
