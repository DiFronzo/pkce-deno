import * as base64 from "https://deno.land/x/base64@v0.2.1/mod.ts";
import { cstring } from "./cstring.ts";
import { SHA256 } from 'https://deno.land/x/sha256@v1.0.2/mod.ts'

const mask: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";

export function random(size: number): string {

    let value: string = "";

    const b64: string = base64.fromUint8Array(new TextEncoder().encode(cstring(size)));
    const bytes: Uint8Array = base64.toUint8Array(b64);

    const scale = 256 / mask.length; // 256 = 0 to 0xFF (randomBytes)

    for (let i: number = 0; i < size; i++) {
        value += mask.charAt(Math.floor(bytes[i] / scale));
    }

    return value;
}

function hash(str: string): any {
    return new SHA256().update(str, "utf8").digest('base64').toString()
}

function base64url(str: string): string {
    return str
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}

export function createVerifier(length: number = 128): string {
    if (length < 43 || length > 128) {
        throw new Error(`expected length ${length} between 43 and 128`);
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

export function create(length: number = 128): CodePair {
    const verifier = createVerifier(length);
    const challenge = createChallenge(verifier);

    return {
        codeVerifier: verifier,
        codeChallenge: challenge
    };
}
