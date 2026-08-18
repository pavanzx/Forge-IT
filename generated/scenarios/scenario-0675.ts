export const scenario = {
  id: "SCN-0675",
  module: "projects",
  companion: "alert",
  trigger: "contextual-check-0675",
  userPrompt: "Need guidance on step 0675.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
