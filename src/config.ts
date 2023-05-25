import * as dotenv from "dotenv";

interface config {
    applicationId: number,
    publicKey: string
}

export default function getConfig(path:string = ".env.example"): config {
    const config = {path: path}
    const get = (key) => <string> dotenv.config(config).parsed[key]

    return {
        applicationId: parseInt(get('APPLICATION_ID')),
        publicKey: get('PUBLIC_KEY')
    }
}
