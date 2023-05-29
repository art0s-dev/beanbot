import {describe, expect, test} from "bun:test";
import getConfig from "../src/config.ts";
import send from "../src/connector.ts";
import {spawn} from "bun";
import DiscordBot from "../src/DiscordBot.ts";
import Config from "../src/config.ts";

describe("Discord", async () => {
    test("Bot can write hello world into a channel", async () => {
        const discordApiBaseUrl = "https://discord.com/api/v10";
        const channelId = "1111629582379004005"; //This is the test channel
        const url = `${discordApiBaseUrl}/channels/${channelId}/messages`;
        const config = new Config();

        const call = await Promise.resolve(fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${config.botToken}`
            },
            body: JSON.stringify({
                content: "hello there"
            })
        }))

        expect(call.status).toBe(200)
    })

    test("Bot can use connection function", async () => {
        const config = new Config();
        const bot = new DiscordBot(config)
        const call = await Promise.resolve( bot.send(
            "1111629582379004005",
            "hello there12"
        ))

        expect(call.status).toBe(200)
    })
})

describe("Inspirobot",  () => {
    test("Bot can recieve inspirobot link",   async () => {
        const link = "https://inspirobot.me/api?generate=true"
        const call = Bun.spawnSync(["curl", link])
        const response = call.stdout.toString()

        const isInspirobotLink = /https:\/\/generated.inspirobot.me\/a\/.*\.jpg/
        expect(response).toMatch(isInspirobotLink)
    })
})