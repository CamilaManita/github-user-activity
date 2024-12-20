"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const getUserEvents = (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        headers: {
            'User-Agent': 'nodejs-cli-app',
        },
    };
    return new Promise((resolve, reject) => {
        https_1.default.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                }
                else {
                    reject(new Error(`API Error: ${res.statusCode} - ${res.statusMessage}`));
                }
            });
        }).on('error', (err) => {
            reject(new Error(`Network Error: ${err.message}`));
        });
    });
};
exports.default = { getUserEvents };
