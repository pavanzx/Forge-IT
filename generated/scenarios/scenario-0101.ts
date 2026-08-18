export const scenario = {
  id: "SCN-0101",
  module: "tools",
  companion: "scout",
  trigger: "contextual-check-0101",
  userPrompt: "Need guidance on step 0101.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
