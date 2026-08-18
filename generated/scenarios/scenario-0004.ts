export const scenario = {
  id: "SCN-0004",
  module: "assistant",
  companion: "spark",
  trigger: "contextual-check-0004",
  userPrompt: "Need guidance on step 0004.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
