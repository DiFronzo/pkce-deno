import { Rhum } from "https://deno.land/x/rhum@v1.1.10/mod.ts";
import { hasFileExtension } from "../utils.ts";
import { create, createChallenge, createVerifier, cstring } from "../mod.ts";

interface CodePair {
  codeVerifier: string;
  codeChallenge: string;
}

Rhum.testPlan("test.ts", () => {
  Rhum.testSuite("hasFileExtension()", () => {
    Rhum.testCase("should validate a filename correctly", () => {
      Rhum.asserts.assertEquals(hasFileExtension("mod.ts", "ts"), true);
      Rhum.asserts.assertEquals(hasFileExtension("mod.ts", "js"), false);
      Rhum.asserts.assertEquals(hasFileExtension("mod", "ts"), false);
      Rhum.asserts.assertEquals(hasFileExtension("mod", "js"), false);
    });
  });
  Rhum.testSuite("create()", () => {
    Rhum.testCase("should have the correct length with lower value", () => {
      const codePair: CodePair = create(43);
      Rhum.asserts.assertEquals(43, codePair.codeChallenge.length);
      Rhum.asserts.assertEquals(43, codePair.codeVerifier.length);
    });
    Rhum.testCase("should have the correct length with bigger value", () => {
      const codePair: CodePair = create(128);
      Rhum.asserts.assertEquals(43, codePair.codeChallenge.length);
      Rhum.asserts.assertEquals(128, codePair.codeVerifier.length);
    });
    Rhum.testCase("bigger value then allowed", () => {
      let codePair: CodePair = { codeVerifier: "", codeChallenge: "" };
      try {
        codePair = create(129);
      } catch (_err) {
        // do nothing, we dont care that it throws
      }
      Rhum.asserts.assertEquals(codePair, {
        codeVerifier: "",
        codeChallenge: "",
      });
    });
  });
  Rhum.testSuite("cstring()", () => {
    Rhum.testCase("should return a given long string", () => {
      const randomVal: string = cstring(12);
      Rhum.asserts.assertEquals(12, randomVal.length);
    });
    Rhum.testCase("should only include a given set of characters", () => {
      const randomVal: string = cstring(200);
      const result: RegExpMatchArray =
        randomVal.match(/^([A-Za-z0-9-._~]*)$/g) || [];
      Rhum.asserts.assertEquals(randomVal, result[0]);
    });
  });
  Rhum.testSuite("createVerifier()", () => {
    Rhum.testCase("should return a valid verifier", () => {
      const randomVal: string = createVerifier(127);
      const result: RegExpMatchArray =
        randomVal.match(/^([A-Za-z0-9-._~]*)$/g) || [];
      Rhum.asserts.assertEquals(randomVal, result[0]);
    });
  });
  Rhum.testSuite("createChallenge()", () => {
    Rhum.testCase("should return a valid challenge", () => {
      const challenge =
        "IdBg3S0AWzKmrkcvzhK.biD4XudSU0mq1K0gGAalwG66FTmMKOqP7YUcWlRVAEzKmiMHne0sw6MxE6uYHBMHggJ7uWFsvRWQ61v1WNEn4IZ7kHrei6CfuZaIh2rBXGiP";
      const randomVal: string = createChallenge(challenge);
      const result: RegExpMatchArray =
        randomVal.match(/^([A-Za-z0-9-._~]*)$/g) || [];
      Rhum.asserts.assertEquals(randomVal, result[0]);
      Rhum.asserts.assertEquals(
        "gv-7aFUDVY2IoAEXWNtN5Kq1RmkJ21gcRq4DeQZpx1U",
        randomVal,
      );
    });
  });
});

Rhum.run();
