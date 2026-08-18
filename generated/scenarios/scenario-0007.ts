export const scenario = {
  id: "SCN-0007",
  module: "tasks",
  companion: "bot",
  trigger: "contextual-check-0007",
  userPrompt: "Need guidance on step 0007.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
