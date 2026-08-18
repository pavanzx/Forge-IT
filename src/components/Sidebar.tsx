"use client";
import Link from "next/link";
import { navigation } from "@/src/lib/navigation";
import { LayoutDashboard, FolderKanban, Bot, Boxes, Route, ListChecks, ChartNoAxesCombined, Bookmark, FileChartColumn, Settings } from "lucide-react";
const icons=[LayoutDashboard,FolderKanban,Bot,Boxes,Route,ListChecks,ChartNoAxesCombined,Bookmark,FileChartColumn,Settings];
export function Sidebar({active}:{active:string}){return <aside className="sidebar"><div className="brand sidebar-brand"><span className="brand-mark">F</span><span>Forge<span className="accent">-IT</span></span></div><div className="side-nav">{navigation.map((item,i)=>{const Icon=icons[i];return <Link key={item.key} className={active===item.key?"active":""} href={item.href}><Icon size={17}/><span>{item.label}</span></Link>})}</div><div className="side-bottom"><div className="upgrade-card"><b>Build with intention.</b><span>AI, roadmap, tools, tasks — together.</span></div></div></aside>}
