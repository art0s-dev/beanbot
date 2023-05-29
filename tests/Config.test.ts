import {expect, test, describe} from "bun:test";
import * as dotenv from "dotenv";
import getConfig from "../src/config";
import Config from "../src/config";

describe("Config", () => {
    test("Bot can read env", () => {
        const config = { path: ".env.example" }
        const publicKey = dotenv.config(config)
            .parsed?.BOT_TOKEN

        expect(publicKey).toBe("007")
    })

    test("Bot can use config functionality", () => {
        const config = new Config(".env.example")
        const publicKey = config.botToken
        expect(publicKey).toBe("007")
    })
})