import * as React from "react";

export type AdventureModule242Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule242({label="Forge-IT module",active=true,onAction}:AdventureModule242Props) {
  return <section data-module="242" data-active={active} aria-label={label} className="generated-module generated-module-242">
    <div className="generated-module__hud"><span>MODULE 242</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
