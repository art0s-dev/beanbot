import * as dotenv from "dotenv";

export default class Config{
    public readonly applicationId: number;
    public readonly botToken: string;
    public readonly apiUrl: string;

    public constructor(path:string = ".env") {
        const config = this.createConfig(path)
        this.applicationId = config.applicationId;
        this.botToken = config.botToken;
        this.apiUrl = config.apiUrl;
    }

    createConfig(path: string) {
        const config = {path: path}
        const get = (key) => <string> dotenv.config(config).parsed[key]

        return {
            applicationId: parseInt(get('APPLICATION_ID')),
            botToken: get('BOT_TOKEN'),
            apiUrl: get('API_URL')
        }
    }

}


