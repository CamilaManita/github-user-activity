"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_table3_1 = __importDefault(require("cli-table3"));
const chalk = require('chalk');
const displayActivity = (events, eventType, limit) => {
    const filteredEvents = eventType
        ? events.filter((event) => event.type === eventType)
        : events;
    if (filteredEvents.length === 0) {
        console.log(chalk.yellow(`⚠️ No se encontraron eventos del tipo: ${eventType}`));
        return;
    }
    const table = new cli_table3_1.default({
        head: [chalk.green('N°'), chalk.blue('Evento'), chalk.magenta('Repositorio')],
    });
    filteredEvents.slice(0, limit).forEach((event, index) => {
        const { type, repo } = event;
        table.push([index + 1, chalk.cyan(type), chalk.yellow(repo.name)]);
    });
    console.log(table.toString());
};
exports.default = displayActivity;
