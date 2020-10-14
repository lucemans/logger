"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Logger = void 0;
var chalk = require("chalk");
var Logger = /** @class */ (function () {
    function Logger(prefix) {
        this.prefix = prefix;
    }
    Logger.prototype.dumb = function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i] = arguments[_i];
        }
        this.raw(chalk.magenta('DUMB'), chalk.bgMagenta(chalk.white.apply(chalk, __spreadArrays([' '], str, [' ']))));
    };
    Logger.prototype.success = function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i] = arguments[_i];
        }
        this.raw.apply(this, __spreadArrays([chalk.greenBright('SUCCESS')], str));
    };
    Logger.prototype.warn = function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i] = arguments[_i];
        }
        this.raw(chalk.bgBlack(chalk.yellowBright('WARN')), chalk.bgYellow(chalk.black.apply(chalk, __spreadArrays([' '], str, [' ']))));
    };
    Logger.prototype.info = function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i] = arguments[_i];
        }
        this.raw(chalk.cyan('INFO'), chalk.gray.apply(chalk, str));
    };
    Logger.prototype.error = function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i] = arguments[_i];
        }
        this.raw(chalk.red('ERROR'), chalk.bgRed(chalk.black.apply(chalk, __spreadArrays([' '], str, [' ']))));
    };
    Logger.prototype.raw = function (infix) {
        var str = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            str[_i - 1] = arguments[_i];
        }
        console.log(this.prefix + " " + infix + " " + str.join(' '));
    };
    return Logger;
}());
exports.Logger = Logger;
