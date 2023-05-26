import * as dotenv from "dotenv";

export interface Config {
    applicationId: number,
    publicKey: string,
    botToken: string,
    clientSecret: string
    apiUrl: string
}

export default function getConfig( path:string = ".env" ): Config {
    const config = {path: path}
    const get = (key) => <string> dotenv.config(config).parsed[key]

    return {
        applicationId: parseInt(get('APPLICATION_ID')),
        publicKey: get('PUBLIC_KEY'),
        botToken: get('BOT_TOKEN'),
        clientSecret: get('CLIENT_SECRET'),
        apiUrl: get('API_URL')
    }
}
