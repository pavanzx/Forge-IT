export const scenario = {
  id: "SCN-0601",
  module: "auth",
  companion: "bot",
  trigger: "contextual-check-0601",
  userPrompt: "Need guidance on step 0601.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
