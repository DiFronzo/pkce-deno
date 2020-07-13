import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { create } from "./mod.ts";

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
