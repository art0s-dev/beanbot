import {describe, expect, test} from "bun:test";
import getConfig from "../src/config.ts";
import send from "../src/connector.ts";

const TEST_API = 'https://jsonplaceholder.typicode.com/todos/420'

test("Bot can use network", () => {
    fetch(TEST_API)
        .then(response => response.json())
        .then(json => expect(json).toBe({}))
})

describe("Bot can use discord messages", () => {
    test("write hello world into a channel", async () => {
        const discordApiBaseUrl = "https://discord.com/api/v10";
        const channelId = "1111629582379004005"; //This is the test channel
        const url = `${discordApiBaseUrl}/channels/${channelId}/messages`;

        const call = await Promise.resolve(fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${getConfig().botToken}`
            },
            body: JSON.stringify({
                content: "hello there"
            })
        }))

        expect(call.status).toBe(200)
    })

    test("Bot can use connection function", async () => {
        const call = await Promise.resolve( send({
            channelId: "1111629582379004005",
            content: "hello there12"
        }))

        expect(call.status).toBe(200)
    })

})