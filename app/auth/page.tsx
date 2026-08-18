"use client";
import { useRouter } from "next/navigation";
import { AuthModal } from "@/src/components/AuthModal";
export default function AuthPage(){ const router=useRouter(); return <div className="page-center"><AuthModal onClose={()=>router.push("/")} onSuccess={()=>router.push("/dashboard")} /></div> }
