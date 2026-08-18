export const scenario = {
  id: "SCN-0501",
  module: "saved",
  companion: "alert",
  trigger: "contextual-check-0501",
  userPrompt: "Need guidance on step 0501.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
