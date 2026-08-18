export const scenario = {
  id: "SCN-0403",
  module: "tasks",
  companion: "bot",
  trigger: "contextual-check-0403",
  userPrompt: "Need guidance on step 0403.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
