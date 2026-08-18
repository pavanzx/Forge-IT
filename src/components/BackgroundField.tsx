"use client";
import { useEffect, useState } from "react";
import { readPrefs } from "@/src/lib/uiState";
import type { CharacterKey } from "@/src/lib/characters";
export function BackgroundField({intensity="app",character}:{intensity?:"hero"|"app";character?:CharacterKey}){
  const [enabled,setEnabled]=useState(true);
  useEffect(()=>setEnabled(readPrefs().background),[]);
  if(!enabled) return null;
  return <div className={`background-field ${intensity} char-${character||"guide"}`} aria-hidden="true">
    <div className="orb orb-a"/><div className="orb orb-b"/><div className="grid-noise"/>
    {Array.from({length:18},(_,i)=><span key={i} className={`particle p${(i%4)+1}`} style={{left:`${(i*17)%94}%`,top:`${(i*29)%88}%`,animationDelay:`${(i%7)*.7}s`}}/>)}
    <div className="scanline"/><div className="retro-spark"/>
  </div>
}
