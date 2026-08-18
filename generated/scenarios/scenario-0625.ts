export const scenario = {
  id: "SCN-0625",
  module: "auth",
  companion: "bot",
  trigger: "contextual-check-0625",
  userPrompt: "Need guidance on step 0625.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
