import * as React from "react";

export type AdventureModule128Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule128({label="Forge-IT module",active=true,onAction}:AdventureModule128Props) {
  return <section data-module="128" data-active={active} aria-label={label} className="generated-module generated-module-128">
    <div className="generated-module__hud"><span>MODULE 128</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
