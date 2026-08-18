export const scenario = {
  id: "SCN-0503",
  module: "settings",
  companion: "scout",
  trigger: "contextual-check-0503",
  userPrompt: "Need guidance on step 0503.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
