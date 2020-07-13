import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { create } from "./mod.ts";

Deno.test("Test of length", () => {
        const codePair: any = create(43);
        assertEquals(codePair.codeChallenge.length, 43);
});

Deno.test("Too short length", function (): void {
  assertThrows((): void => {
    throw create(10);
  }, Error);
});

Deno.test("Too long length", function (): void {
  assertThrows((): void => {
    throw create(130);
  }, Error);
});

Deno.test("Test of length", () => {
        const codePair: any = create();
        assertEquals(codePair.codeVerifier.length, 128);
});

