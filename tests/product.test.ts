import { describe, expect, it } from "vitest";
import { heroFlow, projects } from "../src/data/product";
describe("product data",()=>{it("contains the core idea-to-launch flow",()=>{expect(heroFlow.length).toBeGreaterThanOrEqual(6);expect(heroFlow[0].title).toBe("Capture ideas")});it("contains deterministic demo projects",()=>{expect(projects.length).toBe(3);expect(projects.some(p=>p.progress===68)).toBe(true)})});
