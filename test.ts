import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { create } from "./mod.ts";

Deno.test("Too short length", function (): void {
  assertThrows(() => {
    throw create(10);
  }, Error);
});

Deno.test("Too long length", function (): void {
  assertThrows(() => {
    throw create(130);
  }, Error);
});
