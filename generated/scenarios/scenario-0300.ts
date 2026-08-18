export const scenario = {
  id: "SCN-0300",
  module: "landing",
  companion: "guide",
  trigger: "contextual-check-0300",
  userPrompt: "Need guidance on step 0300.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
