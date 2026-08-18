import * as React from "react";

export type AdventureModule173Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule173({label="Forge-IT module",active=true,onAction}:AdventureModule173Props) {
  return <section data-module="173" data-active={active} aria-label={label} className="generated-module generated-module-173">
    <div className="generated-module__hud"><span>MODULE 173</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
