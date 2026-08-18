"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/src/lib/auth";
export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => { if (!getSession()) router.replace("/auth"); }, [router]);
  return <>{children}</>;
}
