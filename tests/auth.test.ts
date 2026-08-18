import { describe, expect, it } from "vitest";
import { authenticate } from "../src/lib/auth";
describe("mock authentication",()=>{it("accepts a valid email and password",async()=>{await expect(authenticate("builder@example.com","password")).resolves.toMatchObject({email:"builder@example.com"})});it("rejects invalid email",async()=>{await expect(authenticate("bad","password")).rejects.toThrow()})});
