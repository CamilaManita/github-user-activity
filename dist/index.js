#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchActivity_1 = __importDefault(require("./commands/fetchActivity"));
// Obtener argumentos del usuario
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('❌ Por favor, ingresa un nombre de usuario de GitHub.');
    process.exit(1);
}
const username = args[0];
const eventType = args[1] || null; // Tipo de evento opcional
const limit = args[2] ? parseInt(args[2], 10) : 5; // Número de eventos opcional
(0, fetchActivity_1.default)(username, eventType, limit);
