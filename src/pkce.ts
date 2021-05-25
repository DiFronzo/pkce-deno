import { SHA256 } from "https://deno.land/x/sha256@v1.0.2/mod.ts";

const mask =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";

export function cstring(length: number): string {
  if (!length) throw new Error(`expected a length variable`);

  let string = "";
  const values: Uint8Array = crypto.getRandomValues(new Uint8Array(length));

  for (; length--;) {
    const _ = 63 & values[length];

    string += (_ < 36
      ? _.toString(36)
      : _ < 62
      ? (_ - 26).toString(36).toUpperCase()
      : _ < 63
      ? "_"
      : "-");
  }
  return string;
}

export function random(size: number): string {
  let value = "";

  const bytes: Uint8Array = new TextEncoder().encode(cstring(size));

  const scale = 256 / mask.length; // 256 = 0 to 0xFF (randomBytes)

  for (let i = 0; i < size; i++) {
    value += mask.charAt(Math.floor(bytes[i] / scale));
  }

  return value;
}

function hash(str: string): string {
  return new SHA256().update(str, "utf8").digest("base64").toString();
}

function base64url(str: string): string {
  return str
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export function createVerifier(length = 128): string {
  // https://datatracker.ietf.org/doc/html/rfc7636#section-4.1
  if (length < 43 || length > 128) {
    throw new Error(`expected length needs to be between 43 and 128`);
  }

  return random(length);
}

export function createChallenge(verifier: string): string {
  return base64url(hash(verifier));
}

interface CodePair {
  codeVerifier: string;
  codeChallenge: string;
}

export function create(length = 128): CodePair {
  const verifier = createVerifier(length);
  const challenge = createChallenge(verifier);

  return {
    codeVerifier: verifier,
    codeChallenge: challenge,
  };
}
