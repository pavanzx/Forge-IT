export type CharacterKey="guide"|"bot"|"analyst"|"alert"|"spark"|"scout";
export const characters={
 guide:{name:"Codey",role:"Builder Guide",personality:"bold, optimistic, motivating",bubble:"Ready? Let's turn the next step into real progress.",color:"#ef4444"},
 bot:{name:"Nexa",role:"Technical AI",personality:"calm, precise, solution-focused",bubble:"Give me the blocker. I’ll help you solve it step by step.",color:"#3b82f6"},
 analyst:{name:"Mira",role:"Requirements Analyst",personality:"observant, precise, evidence-driven",bubble:"I found requirements that could change the plan.",color:"#8b5cf6"},
 alert:{name:"Bolt",role:"Risk & Dependency Watcher",personality:"protective, energetic, direct",bubble:"Stop here — this step has a dependency we should resolve first.",color:"#ef4444"},
 spark:{name:"Pixel",role:"Idea Coach",personality:"curious, creative, constructive",bubble:"I can turn that rough idea into a stronger feature.",color:"#f59e0b"},
 scout:{name:"Scout",role:"Tool Explorer",personality:"explorative, practical, comparison-driven",bubble:"I found a few tools that fit your budget and speed.",color:"#22c55e"}
} as const;
