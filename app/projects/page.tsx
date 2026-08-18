"use client";
import { AppShell } from "@/src/components/AppShell";
import { CharacterStage } from "@/src/components/CharacterStage";
import { ProjectBuilder } from "@/src/components/ProjectBuilder";
export default function Projects(){return <AppShell active="projects" character="analyst"><section className="module-page"><div className="page-heading"><div><span className="section-kicker">IDEA → PROJECT</span><h1>My Projects</h1><p>Create, manage, and re-enter projects without losing context.</p></div><CharacterStage character="analyst" bubble="I found four core questions to define your project clearly." /></div><ProjectBuilder /></section></AppShell>}
