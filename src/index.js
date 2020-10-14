"use strict";
exports.__esModule = true;
exports.Logger = void 0;
var chalk = require("chalk");
var Logger = /** @class */ (function () {
    function Logger(prefix) {
        this.prefix = prefix;
    }
    Logger.prototype.dumb = function (str) {
        this.raw(str, chalk.gray('DUMB'));
    };
    Logger.prototype.success = function (str) {
        this.raw(str, chalk.greenBright('SUCCESS'));
    };
    Logger.prototype.warn = function (str) {
        this.raw(str, chalk.yellowBright('WARN'));
    };
    Logger.prototype.info = function (str) {
        this.raw('\\033[31m' + str, chalk.cyan('INFO'));
    };
    Logger.prototype.error = function (str) {
        this.raw(str, chalk.red('ERROR'));
    };
    Logger.prototype.raw = function (str, infix) {
        console.log(this.prefix + " " + infix + " " + str);
    };
    return Logger;
}());
exports.Logger = Logger;
