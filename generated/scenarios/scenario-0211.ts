export const scenario = {
  id: "SCN-0211",
  module: "tasks",
  companion: "bot",
  trigger: "contextual-check-0211",
  userPrompt: "Need guidance on step 0211.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
