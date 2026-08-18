export const scenario = {
  id: "SCN-0724",
  module: "assistant",
  companion: "spark",
  trigger: "contextual-check-0724",
  userPrompt: "Need guidance on step 0724.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
