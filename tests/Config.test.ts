import {expect, test, describe} from "bun:test";
import * as dotenv from "dotenv";
import getConfig from "../src/config";
import Config from "../src/config";
import {get} from "http";
import loadConfig from "../src/config";

describe("Config", () => {
    test("Bot can read env", () => {
        const config = { path: ".env.example" }
        const token = dotenv.config(config)
            .parsed?.BOT_TOKEN

        expect(token).toBe("007")
    })

    test("Bot can use config functionality", () => {
        const token = loadConfig(".env.example").botToken;
        expect(token).toBe("007")
    })
})