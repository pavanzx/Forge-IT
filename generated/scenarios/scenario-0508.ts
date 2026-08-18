export const scenario = {
  id: "SCN-0508",
  module: "assistant",
  companion: "spark",
  trigger: "contextual-check-0508",
  userPrompt: "Need guidance on step 0508.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
