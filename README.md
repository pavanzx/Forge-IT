# Forge-IT — Retro 3D Adventure Workspace

Forge-IT is an interactive Next.js/React portfolio application built around the journey IDEA → REQUIREMENTS → TOOLS → ROADMAP → TASKS → AI HELP → ANALYTICS → LAUNCH.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Demo flow

1. Landing page: click **Start Building**.
2. Authentication modal: enter any valid email and a password with at least 6 characters.
3. Dashboard: use the sidebar or quick actions to move between modules.
4. Projects: create a project, select tools, build a roadmap, and persist the demo project locally.
5. Tasks: mark tasks complete; state survives refresh via localStorage.
6. AI Assistant: click prompt cards or submit your own question.
7. Settings: toggle motion/background/theme preferences.

## Character system

Each page intentionally uses one contextual companion:

- Codey / Guide — momentum and onboarding
- Nexa / Bot — technical help
- Mira / Analyst — requirements
- Bolt / Alert — risk and dependencies
- Pixel / Spark — ideation
- Scout — tools and resources

The reference imagery is stored under `public/assets/references`, with individual character assets under `public/assets/characters`.

## Architecture

The core app is real and interactive; the generated module library under `src/generated` provides a large, organized surface for future reusable modules, animation experiments, behaviors, and implementation documentation without polluting the main route code.
