import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { create } from "./mod.ts";

function test(size: number, type: string) {
    return function() {
        const codePair: any = create(size);
        assertEquals(codePair[type].length, size);
    }
}

Deno.test("Test of length", test(43, 'codeChallenge'));
Deno.test("Test of length 2", test(128, 'codeVerifier'));

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


