export const scenario = {
  id: "SCN-0422",
  module: "dashboard",
  companion: "analyst",
  trigger: "contextual-check-0422",
  userPrompt: "Need guidance on step 0422.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
