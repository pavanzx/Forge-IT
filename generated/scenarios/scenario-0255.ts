export const scenario = {
  id: "SCN-0255",
  module: "projects",
  companion: "alert",
  trigger: "contextual-check-0255",
  userPrompt: "Need guidance on step 0255.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
