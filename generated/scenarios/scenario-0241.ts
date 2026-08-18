export const scenario = {
  id: "SCN-0241",
  module: "auth",
  companion: "bot",
  trigger: "contextual-check-0241",
  userPrompt: "Need guidance on step 0241.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
