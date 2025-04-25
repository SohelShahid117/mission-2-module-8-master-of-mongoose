"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const port = 3000
//parser
app.use(express_1.default.json());
// app.use(express.cors())
app.get('/', (req, res) => {
    const a = 88;
    console.log(a);
    res.send('Hello World!');
});
console.log("current work directory is :" + process.cwd());
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
exports.default = app;
