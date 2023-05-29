import {Config} from "./config";

export default class DiscordBot {
    private readonly config: Config;

    public constructor(config: Config) {
        this.config = config;
    }

    async send(channelId:string, message:string) {
        const config = this.config
        const url = `${config.apiUrl}/channels/${channelId}/messages`;
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${config.botToken}`
            },
            body: JSON.stringify({
                content: message
            })
        })
    }
}


