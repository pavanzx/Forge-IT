import * as React from "react";

export type AdventureModule016Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule016({label="Forge-IT module",active=true,onAction}:AdventureModule016Props) {
  return <section data-module="016" data-active={active} aria-label={label} className="generated-module generated-module-016">
    <div className="generated-module__hud"><span>MODULE 016</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
