import { SlasherClient } from "discord.js-slasher";
import * as commands from './commands';

const client = new SlasherClient({ useAuth: true });

client.on("command", commands.execute);
client.on("ready", () => {
    console.log("[Bot] Logged in: " + client.user.tag);
});

client.login();