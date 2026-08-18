import type { Metadata } from "next";
import "../src/styles/globals.css";
import "../src/styles/animations.css";
import "../src/styles/theme.css";

export const metadata: Metadata = {
  title: "Forge-IT — Build Smarter. Launch Faster.",
  description: "AI-powered project planning, tool discovery, roadmap generation, task execution, and progress tracking.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
