export const scenario = {
  id: "SCN-0310",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0310",
  userPrompt: "Need guidance on step 0310.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
