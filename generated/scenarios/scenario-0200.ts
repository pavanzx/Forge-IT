export const scenario = {
  id: "SCN-0200",
  module: "analytics",
  companion: "analyst",
  trigger: "contextual-check-0200",
  userPrompt: "Need guidance on step 0200.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
