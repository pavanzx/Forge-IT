export const scenario = {
  id: "SCN-0109",
  module: "auth",
  companion: "bot",
  trigger: "contextual-check-0109",
  userPrompt: "Need guidance on step 0109.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
