"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile('./input.txt', 'utf8', (err, input) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(solutionOne(input));
    console.log(solutionTwo(input));
});
const solutionOne = (input) => input.split(/\r?\n/).filter((line, i, array) => i !== 0 && parseInt(line) > parseInt(array[i - 1])).length;
const solutionTwo = (input) => input.split(/\r?\n/).filter((line, i, array) => i !== 0 && parseInt(array[i + 1]) > parseInt(array[i - 2])).length;
//# sourceMappingURL=index.js.map