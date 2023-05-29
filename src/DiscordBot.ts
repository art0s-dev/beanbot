import {Config} from "./Config.ts";

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
            body: JSON.stringify({ content: message }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bot ${config.botToken}`
            }
        })
    }

    async sendImage() {
        const config = this.config
        const curl = Bun.spawnSync(["curl", config.inspirobotUrl ])
        const linkToImage = curl.stdout.toString()
        return this.send(config.channelId, linkToImage)
    }
}


