import * as React from "react";

export type AdventureModule169Props = { label?: string; active?: boolean; onAction?: () => void };

export default function AdventureModule169({label="Forge-IT module",active=true,onAction}:AdventureModule169Props) {
  return <section data-module="169" data-active={active} aria-label={label} className="generated-module generated-module-169">
    <div className="generated-module__hud"><span>MODULE 169</span><strong>{label}</strong></div>
    <button type="button" onClick={onAction} className="generated-module__action">Open module</button>
  </section>;
}
