import * as React from "react";

export type AdventureModule103Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule103({label="Forge-IT module",active=true,onAction}:AdventureModule103Props) {
  return <section data-module="103" data-active={active} aria-label={label} className="generated-module generated-module-103">
    <div className="generated-module__hud"><span>MODULE 103</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
