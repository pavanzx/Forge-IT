import * as React from "react";

export type AdventureModule053Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule053({label="Forge-IT module",active=true,onAction}:AdventureModule053Props) {
  return <section data-module="053" data-active={active} aria-label={label} className="generated-module generated-module-053">
    <div className="generated-module__hud"><span>MODULE 053</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
