"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const githubService_1 = __importDefault(require("../services/githubService"));
let displayActivity;
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const fetchActivity = async (username, eventType, limit) => {
    try {
        console.log(`🔍 Buscando actividad reciente de: ${username}`);
        const events = await githubService_1.default.getUserEvents(username);
        if (events.length === 0) {
            console.log('⚠️ No se encontró actividad reciente.');
            return;
        }
        if (!displayActivity) {
            displayActivity = (await import('../models/eventModel.mjs')).default;
        }
        console.log(`🎯 Actividad reciente${eventType ? ` (Filtrado por: ${eventType})` : ''}:`);
        displayActivity(events, eventType, limit);
    }
    catch (error) {
        (0, errorHandler_1.default)(error);
    }
};
exports.default = fetchActivity;
