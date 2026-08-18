import * as React from "react";

export type AdventureModule270Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule270({label="Forge-IT module",active=true,onAction}:AdventureModule270Props) {
  return <section data-module="270" data-active={active} aria-label={label} className="generated-module generated-module-270">
    <div className="generated-module__hud"><span>MODULE 270</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
