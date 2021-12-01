"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// fs.readFile('./input.txt', 'utf8' , (err, input) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(solutionOne(input))
//   console.log(solutionTwo(input))
// })
// const solutionOne = (input: string) => {
//   return 'no return set';
// }
// const solutionTwo = (input: string) => {
//   return 'no return set';
// }
const input = fs_1.default.readFileSync("input.txt").toString().split("\n").map(i => +i);
const solutionPart1 = input.filter((n, i) => input[i] < input[i + 1]).length;
console.log(solutionPart1);
const solutionPart2 = input.filter((n, i) => input[i] + input[i + 1] + input[i + 2] < input[i + 1] + input[i + 2] + input[i + 3]).length;
console.log(solutionPart2);
//# sourceMappingURL=index.js.map