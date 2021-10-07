import { CommandContext } from "discord.js-slasher";
import CommandHandler from "./handler";

export default class InfoCommand extends CommandHandler {

    constructor() {
        super();
    }

    async execute(ctx: CommandContext): Promise<any> {
        await ctx.reply("this is the info command!");
    }

}