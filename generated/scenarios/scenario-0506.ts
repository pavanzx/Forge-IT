export const scenario = {
  id: "SCN-0506",
  module: "dashboard",
  companion: "analyst",
  trigger: "contextual-check-0506",
  userPrompt: "Need guidance on step 0506.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
