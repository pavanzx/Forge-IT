export type MotionMode = "full" | "reduced" | "off";
const PREFS_KEY = "forge-it-prefs";
const PROJECT_KEY = "forge-it-projects";
const TASK_KEY = "forge-it-tasks";

export type UIPrefs = { motion: MotionMode; background: boolean; theme: "light" | "dark" };
export type LocalProject = { id: string; name: string; description: string; idea: string; progress: number; phase: string; createdAt: string };

const defaultPrefs: UIPrefs = { motion: "full", background: true, theme: "light" };

export function readPrefs(): UIPrefs {
  if (typeof window === "undefined") return defaultPrefs;
  try { return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(PREFS_KEY) || "{}") }; } catch { return defaultPrefs; }
}
export function writePrefs(prefs: UIPrefs) { if (typeof window !== "undefined") localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); }
export function readProjects(): LocalProject[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(PROJECT_KEY) || "[]"); } catch { return []; }
}
export function addProject(input: Omit<LocalProject, "id" | "createdAt">): LocalProject {
  const project: LocalProject = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  const next = [project, ...readProjects()];
  localStorage.setItem(PROJECT_KEY, JSON.stringify(next));
  return project;
}
export function readTaskStates(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(TASK_KEY) || "{}"); } catch { return {}; }
}
export function writeTaskStates(next: Record<string, boolean>) { if (typeof window !== "undefined") localStorage.setItem(TASK_KEY, JSON.stringify(next)); }
