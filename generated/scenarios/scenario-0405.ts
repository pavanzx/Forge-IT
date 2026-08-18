export const scenario = {
  id: "SCN-0405",
  module: "saved",
  companion: "alert",
  trigger: "contextual-check-0405",
  userPrompt: "Need guidance on step 0405.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
