export const scenario = {
  id: "SCN-0105",
  module: "saved",
  companion: "alert",
  trigger: "contextual-check-0105",
  userPrompt: "Need guidance on step 0105.",
  bubble: "I noticed something worth checking before you continue.",
  action: "Open guided explanation",
  outcome: "Keep the project moving without silently changing the plan."
} as const;
