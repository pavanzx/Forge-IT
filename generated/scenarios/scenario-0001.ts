export const scenario = {
  id: "SCN-0001",
  module: "auth",
  companion: "bot",
  trigger: "contextual-check-0001",
  userPrompt: "Need guidance on step 0001.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
