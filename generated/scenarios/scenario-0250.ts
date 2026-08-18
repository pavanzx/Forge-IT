export const scenario = {
  id: "SCN-0250",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0250",
  userPrompt: "Need guidance on step 0250.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
