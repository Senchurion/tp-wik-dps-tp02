"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/ping' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end();
    }
});
const PING_LISTEN_PORT = 8080;
const port = process.env.PING_LISTEN_PORT || PING_LISTEN_PORT;
server.listen(port, () => {
    console.log(`Server is running on port ${port}. Go to http://localhost:${port}/`);
});
