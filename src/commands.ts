import { CommandContext } from "discord.js-slasher";
import CommandHandler from "./commands/handler";

// get the commands
import InfoCommand from './commands/info';

// command handler dictionary
const COMMANDS: { [name: string]: CommandHandler } = {
    "info": new InfoCommand()
};

export async function execute(ctx: CommandContext) {
    // if a command handler exists, run it
    if(COMMANDS[ctx.name]) {
        await COMMANDS[ctx.name].execute(ctx);
    }
}