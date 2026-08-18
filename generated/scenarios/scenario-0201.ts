export const scenario = {
  id: "SCN-0201",
  module: "saved",
  companion: "alert",
  trigger: "contextual-check-0201",
  userPrompt: "Need guidance on step 0201.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
