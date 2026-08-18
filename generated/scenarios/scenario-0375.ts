export const scenario = {
  id: "SCN-0375",
  module: "projects",
  companion: "alert",
  trigger: "contextual-check-0375",
  userPrompt: "Need guidance on step 0375.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
