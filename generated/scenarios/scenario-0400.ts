export const scenario = {
  id: "SCN-0400",
  module: "assistant",
  companion: "spark",
  trigger: "contextual-check-0400",
  userPrompt: "Need guidance on step 0400.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
