import * as dotenv from "dotenv";

export interface Config {
    applicationId: number,
    botToken: string,
    apiUrl: string
}

export default function loadConfig(path: string = ".env"): Config {
    const options = {path: path}
    const load = (key) => <string> dotenv.config(options).parsed[key]

    return Object.freeze({
        applicationId: <number>load('APPLICATION_ID'),
        botToken: <string>load('BOT_TOKEN'),
        apiUrl: <string>load('API_URL')
    })
}