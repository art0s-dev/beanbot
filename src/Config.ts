import * as dotenv from "dotenv";

export interface Config {
    applicationId: number,
    botToken: string,
    apiUrl: string
    channelId: string,
    inspirobotUrl: string
}

export default function loadConfig(path: string = ".env"): Config {
    const options = {path: path}
    const load = (key) => dotenv.config(options).parsed[key]

    return Object.freeze({
        applicationId: <number> load('APPLICATION_ID'),
        botToken: load('BOT_TOKEN'),
        apiUrl: load('API_URL'),
        channelId: load('CHANNEL_ID'),
        inspirobotUrl: load('INSPIROBOT_URL')
    })
}