import {expect, test} from "bun:test";
import * as dotenv from "dotenv";
import getConfig from "../src/config";

test("Bot can read env", () => {
    const config = { path: ".env.example" }
    const publicKey = dotenv.config(config)
        .parsed?.PUBLIC_KEY

    expect(publicKey).toBe("420")
})

test("Bot can use config", () => {
    const publicKey = getConfig().publicKey
    expect(publicKey).toBe("420")
})