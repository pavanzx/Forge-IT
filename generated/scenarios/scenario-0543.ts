export const scenario = {
  id: "SCN-0543",
  module: "projects",
  companion: "alert",
  trigger: "contextual-check-0543",
  userPrompt: "Need guidance on step 0543.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
