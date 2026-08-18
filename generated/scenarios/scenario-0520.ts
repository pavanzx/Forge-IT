export const scenario = {
  id: "SCN-0520",
  module: "assistant",
  companion: "spark",
  trigger: "contextual-check-0520",
  userPrompt: "Need guidance on step 0520.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
