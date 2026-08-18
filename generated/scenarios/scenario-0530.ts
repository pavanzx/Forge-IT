export const scenario = {
  id: "SCN-0530",
  module: "dashboard",
  companion: "analyst",
  trigger: "contextual-check-0530",
  userPrompt: "Need guidance on step 0530.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
