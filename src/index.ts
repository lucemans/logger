import * as chalk from "chalk";

export class Logger {
    prefix: string;
    constructor(prefix: string) {
        this.prefix = prefix;
    }
    dumb(...str: string[]) {
        this.raw(chalk.gray('DUMB'), ...str);
    }
    success(...str: string[]) {
        this.raw(chalk.greenBright('SUCCESS'), ...str);
    }
    warn(...str: string[]) {
        this.raw(chalk.yellowBright('WARN'), ...str);
    }
    info(...str: string[]) {
        this.raw(chalk.cyan('INFO'), ...str);
    }
    error(...str: string[]) {
        this.raw(chalk.red('ERROR'), ...str);
    }
    raw(infix: string, ...str: string[]) {
        console.log(this.prefix + " " + infix + " " + str.join(' '));
    }
}