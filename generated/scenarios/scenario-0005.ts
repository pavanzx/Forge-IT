export const scenario = {
  id: "SCN-0005",
  module: "tools",
  companion: "scout",
  trigger: "contextual-check-0005",
  userPrompt: "Need guidance on step 0005.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
