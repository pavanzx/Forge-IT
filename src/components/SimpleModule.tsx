"use client";
import Link from "next/link";
import { AppShell } from "@/src/components/AppShell";
import { CharacterStage } from "@/src/components/CharacterStage";
import type { CharacterKey } from "@/src/lib/characters";
export function SimpleModule({title,description,character="guide",links=[]}:{title:string;description:string;character?:CharacterKey;links?:{label:string;href:string}[]}){return <AppShell active={title.toLowerCase().replace(/\s+/g,'-')} character={character}><section className="module-page"><div className="page-heading"><div><span className="section-kicker">FORGE-IT WORKSPACE</span><h1>{title}</h1><p>{description}</p></div><CharacterStage character={character} bubble="This screen is connected to the rest of your Forge-IT workspace." /></div><div className="panel"><h2>Connected actions</h2><p className="muted">Use these routes to continue the workflow.</p><div className="prompt-grid">{links.map(x=><Link key={x.href} href={x.href} className="prompt-card"><b>{x.label}</b><span>Open →</span></Link>)}</div></div></section></AppShell>}
