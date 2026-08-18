"use client";
export default function Error({reset}:{error:Error & {digest?:string};reset:()=>void}){return <main className="page-center"><div className="panel"><span className="section-kicker">WORKSHOP ERROR</span><h2>The forge hit a snag.</h2><p className="muted">Your progress is kept in local demo storage.</p><button className="primary-button" onClick={reset}>Try again</button></div></main>}
