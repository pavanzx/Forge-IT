export const scenario = {
  id: "SCN-0707",
  module: "settings",
  companion: "scout",
  trigger: "contextual-check-0707",
  userPrompt: "Need guidance on step 0707.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
