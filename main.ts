import DiscordBot from "./src/DiscordBot.ts";
import loadConfig from "./src/Config.ts";

const config = loadConfig();
const bot = new DiscordBot(config);
bot.sendImage();


