"use client";
import { useRouter } from "next/navigation";
import { Bell, Search, LogOut, Bot, UserRound } from "lucide-react";
import { clearSession, getSession } from "@/src/lib/auth";
import { useEffect, useState } from "react";
export function Topbar(){
  const router=useRouter(); const [session,setSession]=useState<{email:string;name:string}|null>(null); const [q,setQ]=useState("");
  useEffect(()=>setSession(getSession()),[]);
  function submit(e:React.FormEvent){e.preventDefault(); if(q.trim()) router.push(`/tools?q=${encodeURIComponent(q.trim())}`)}
  return <header className="topbar"><form className="searchbox" onSubmit={submit}><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search anything..."/><kbd>⌘ K</kbd></form><div className="top-actions"><button className="icon-button" title="Ask AI" onClick={()=>router.push('/assistant')}><Bot size={17}/><span className="notif-dot"/></button><button className="icon-button" title="Notifications"><Bell size={17}/></button><button className="avatar-button" title="Profile" onClick={()=>router.push('/settings')}><UserRound size={17}/></button><div className="profile-label"><b>{session?.name||"Builder"}</b><small>Forge-IT user</small></div><button className="icon-button" title="Sign out" onClick={()=>{clearSession();router.replace('/')}}><LogOut size={17}/></button></div></header>
}
