export const scenario = {
  id: "SCN-0106",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0106",
  userPrompt: "Need guidance on step 0106.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
