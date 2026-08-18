import * as React from "react";

export type AdventureModule062Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule062({label="Forge-IT module",active=true,onAction}:AdventureModule062Props) {
  return <section data-module="062" data-active={active} aria-label={label} className="generated-module generated-module-062">
    <div className="generated-module__hud"><span>MODULE 062</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
