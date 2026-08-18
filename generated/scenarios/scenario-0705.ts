export const scenario = {
  id: "SCN-0705",
  module: "saved",
  companion: "alert",
  trigger: "contextual-check-0705",
  userPrompt: "Need guidance on step 0705.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
