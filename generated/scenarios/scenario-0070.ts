export const scenario = {
  id: "SCN-0070",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0070",
  userPrompt: "Need guidance on step 0070.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
