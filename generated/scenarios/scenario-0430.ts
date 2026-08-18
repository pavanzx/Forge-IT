export const scenario = {
  id: "SCN-0430",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0430",
  userPrompt: "Need guidance on step 0430.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
