import * as chalk from "chalk";

export class Logger {
    prefix: string;
    constructor(prefix: string) {
        this.prefix = prefix;
    }
    dumb(...str: string[]) {
        this.raw(chalk.magenta('DUMB'), chalk.bgMagenta(chalk.white(' ', ...str, ' ')));
    }
    success(...str: string[]) {
        this.raw(chalk.greenBright('SUCCESS'), ...str);
    }
    warn(...str: string[]) {
        this.raw(chalk.bgBlack(chalk.yellowBright('WARN')), chalk.bgYellow(chalk.black(' ', ...str, ' ')));
    }
    info(...str: string[]) {
        this.raw(chalk.cyan('INFO'), chalk.gray(...str));
    }
    error(...str: string[]) {
        this.raw(chalk.red('ERROR'), chalk.bgRed(chalk.black(' ', ...str, ' ')));
    }
    raw(infix: string, ...str: string[]) {
        console.log(this.prefix + " " + infix + " " + str.join(' '));
    }
}