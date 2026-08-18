import { describe, expect, it } from "vitest";
import { navigation } from "../src/lib/navigation";
describe("navigation",()=>{it("contains the complete workspace module set",()=>{for(const key of ["dashboard","projects","assistant","tools","roadmap","tasks","analytics","saved","reports","settings"]) expect(navigation.some(n=>n.key===key)).toBe(true)})});
