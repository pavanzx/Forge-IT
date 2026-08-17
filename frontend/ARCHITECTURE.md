# Architecture

- `src/core`: router, renderer, bootstrap
- `src/components`: reusable UI
- `src/pages`: product screens
- `src/characters`: six companion controllers, dialogue and motion presets
- `src/effects`: ambient and interaction systems
- `src/features`: domain feature modules
- `src/services`: backend adapters
- `styles`: layered design system

The character director listens to contextual events and moves companions between page-specific anchors using smooth CSS transitions.
