export const scenario = {
  id: "SCN-0445",
  module: "auth",
  companion: "bot",
  trigger: "contextual-check-0445",
  userPrompt: "Need guidance on step 0445.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
