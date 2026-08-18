export const scenario = {
  id: "SCN-0645",
  module: "saved",
  companion: "alert",
  trigger: "contextual-check-0645",
  userPrompt: "Need guidance on step 0645.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
