export const scenario = {
  id: "SCN-0002",
  module: "dashboard",
  companion: "analyst",
  trigger: "contextual-check-0002",
  userPrompt: "Need guidance on step 0002.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
