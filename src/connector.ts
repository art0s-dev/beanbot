import getConfig from "./config";

interface DiscordMessage {
    channelId: string,
    content: string
}

const discordApiBaseUrl = "";

export default async function send(message: DiscordMessage) {
    const config = getConfig();
    const channelId = message.channelId;
    const url = `${config.apiUrl}/channels/${channelId}/messages`;

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bot ${config.botToken}`
        },
        body: JSON.stringify({
            content: message.content
        })
    })

}
