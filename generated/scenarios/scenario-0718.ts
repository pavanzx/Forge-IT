export const scenario = {
  id: "SCN-0718",
  module: "reports",
  companion: "spark",
  trigger: "contextual-check-0718",
  userPrompt: "Need guidance on step 0718.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
