"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { AuthModal } from "@/src/components/AuthModal";
import { BackgroundField } from "@/src/components/BackgroundField";
import { CharacterStage } from "@/src/components/CharacterStage";
import { heroFlow } from "@/src/data/product";

export default function LandingPage() {
  const router = useRouter();
  const [authOpen, setAuthOpen] = useState(false);
  return <main className="landing-page">
    <BackgroundField intensity="hero" />
    <header className="public-header shell">
      <div className="brand"><span className="brand-mark">F</span><span>Forge<span className="accent">-IT</span></span></div>
      <nav><a href="#what">What it does</a><a href="#flow">How it works</a><a href="#impact">Impact</a><a href="#ai">AI</a></nav>
      <div className="header-actions"><button className="ghost-button" onClick={() => setAuthOpen(true)}>Log in</button><button className="primary-button" onClick={() => setAuthOpen(true)}>Start Building <ArrowRight size={16}/></button></div>
    </header>
    <section className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={14}/> AI-powered project building platform</div>
        <h1>Build <span className="accent">Smarter.</span><br/>Launch <span className="accent">Faster.</span></h1>
        <p>Turn a rough idea into requirements, recommendations, a roadmap, execution help, and a launch-ready project — with one AI-guided workspace.</p>
        <div className="hero-actions"><button className="primary-button xl" onClick={() => setAuthOpen(true)}>Start Building <ArrowRight size={18}/></button><button className="ghost-button xl" onClick={() => router.push("/tools")}>Explore Tools</button></div>
        <div className="hero-proof"><span>Idea → Plan → Build → Launch</span><span className="dot"/> <span>Progress never disappears</span></div>
      </div>
      <div className="hero-visual"><CharacterStage character="guide" bubble="Want to turn this idea into a real project?" /><div className="hero-dashboard-preview"><div className="preview-top"><span>Forge-IT</span><span>68%</span></div><div className="preview-grid"><div><small>Current task</small><b>Implement Authentication</b></div><div><small>Roadmap</small><b>Development</b></div><div><small>AI guidance</small><b>3 suggestions</b></div></div></div></div>
    </section>
    <section id="what" className="shell section-grid"><div><span className="section-kicker">01 / WHAT IT DOES</span><h2>Your AI co-pilot for building from zero to launch.</h2><p>Forge-IT connects your idea, requirements, technology choices, roadmap, tasks, blockers, testing, and deployment into one continuous experience.</p></div><div className="feature-stack">{heroFlow.slice(0,4).map((item)=><article key={item.title} className="feature-card"><span className="feature-index">{item.id}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></section>
    <section id="flow" className="shell flow-section"><span className="section-kicker">02 / THE JOURNEY</span><h2>One workspace. Every step.</h2><div className="flow-track">{heroFlow.map((item, i)=><div className="flow-node" key={item.title}><span>{String(i+1).padStart(2,"0")}</span><b>{item.title}</b><small>{item.description}</small></div>)}</div></section>
    <section id="impact" className="shell impact-section"><div><span className="section-kicker">03 / REAL-WORLD IMPACT</span><h2>Less guesswork. More things actually built.</h2><p>Forge-IT is designed to shorten the gap between “I have an idea” and “I have something working,” especially when users do not know which tools, architecture, or steps to choose.</p><div className="impact-points"><span>Students build with structure.</span><span>Creators reduce setup friction.</span><span>Teams see dependencies early.</span><span>Beginners get explanations, not just answers.</span></div></div><div className="impact-card dark-card"><span className="section-kicker">AI SUPPORT</span><b>Context-aware help, not a blank chatbot.</b><p>Ask what to do next, explain a task, find a cheaper stack, troubleshoot an error, or re-plan when requirements change.</p></div></section>
    <section id="ai" className="shell ai-section"><span className="section-kicker">04 / AI THAT STAYS WITH THE PROJECT</span><h2>One conversation that remembers where you are.</h2><div className="ai-panel"><div className="ai-message"><b>Bot</b><p>“You are blocked by Database Setup. Want me to explain the dependency or suggest an alternative path?”</p></div><div className="ai-message user"><b>Builder</b><p>“Show me the cheapest path.”</p></div><div className="ai-message"><b>Bot</b><p>“Based on your current requirements, I can compare options and update the roadmap without silently changing it.”</p></div></div></section>
    <footer className="public-footer shell"><span>Forge-IT — Build Smarter. Launch Faster.</span><button className="primary-button" onClick={()=>setAuthOpen(true)}>Start Building <ArrowRight size={16}/></button></footer>
    <AnimatePresence>{authOpen && <AuthModal onClose={()=>setAuthOpen(false)} onSuccess={()=>router.push("/dashboard")} />}</AnimatePresence>
  </main>
}
