export const scenario = {
  id: "SCN-0622",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0622",
  userPrompt: "Need guidance on step 0622.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
