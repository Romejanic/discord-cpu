import { SlasherClient } from "discord.js-slasher";

const client = new SlasherClient({ useAuth: true });

client.on("command", (ctx) => {
    ctx.reply(ctx.name);
});

client.on("ready", () => {
    console.log("[Bot] Logged in: " + client.user.tag);
});

client.login();