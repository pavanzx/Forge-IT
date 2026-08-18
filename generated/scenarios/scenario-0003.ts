export const scenario = {
  id: "SCN-0003",
  module: "projects",
  companion: "alert",
  trigger: "contextual-check-0003",
  userPrompt: "Need guidance on step 0003.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
