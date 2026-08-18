"use client";
import { Sidebar } from "@/src/components/Sidebar";
import { Topbar } from "@/src/components/Topbar";
import { BackgroundField } from "@/src/components/BackgroundField";
import { AuthGate } from "@/src/components/AuthGate";
import { type CharacterKey } from "@/src/lib/characters";
export function AppShell({active,character,children}:{active:string;character:CharacterKey;children:React.ReactNode}){
  return <AuthGate><div className="app-shell"><BackgroundField character={character}/><Sidebar active={active}/><div className="app-main"><Topbar/><div className="page-content">{children}</div></div></div></AuthGate>;
}
