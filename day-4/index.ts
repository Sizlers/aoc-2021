import fs from "fs";
import { boardItem, boardSum, hits } from "./types";

const input : string[] = fs.readFileSync('./input.txt','utf8').split(/\r?\n/);
const numbers = input[0];
const boardData = input.filter((line, i) => i !== 0 && line !== '').map(line => line.replace(/  +/g, ' ').trim());

const numbersOnBoards : boardItem[] = boardData.map((line, i) => (
  line.split(' ').map((number, j) => ({
    row: j + 1,
    column: (i % line.split(' ').length) + 1,
    board: Math.floor((i / line.split(' ').length) + 1),
    number: parseInt(number)
  }))
)).flat();

const boardArray : number[] = Array(numbersOnBoards[numbersOnBoards.length - 1].board).fill(0).map((_, i) => i + 1);
const boardsSum : boardSum[] = boardArray.map((board) => ({
    board: board,
    sum: numbersOnBoards.filter(number => number.board === board).map(number => number.number).reduce((partialSum, number) => partialSum + number)
}));

let solutionOne = null;
let solutionTwo = null;
const hits : hits[]= [];
let remainingBoards = boardArray;

const answersLogic = (index : number, match : boardItem, id: string, unmarkedBoardSum : number) => {
  if (index === -1) {
    hits.push({
      id: id,
      score: 1
    })
    return;
  };

  hits[index].score++
  if(hits[index].score >= 5) {
    remainingBoards = remainingBoards.filter(board => board !== match.board);
    solutionTwo = remainingBoards.length === 0 && solutionTwo === null ? {
      board: match.board,
      unmarkedBoardSum: unmarkedBoardSum,
      finalScore: unmarkedBoardSum * match.number
    } : solutionTwo;

    solutionOne = solutionOne === null ? {
      board: match.board,
      unmarkedBoardSum: unmarkedBoardSum,
      finalScore: unmarkedBoardSum * match.number
    } : solutionOne 
    return;
  }  
}

numbers.split(',').forEach((number) => {
  const matches = numbersOnBoards.filter((board) => board.number === parseInt(number));
  matches.some((match) => {
      const unmarkedBoardSum : number = boardsSum[boardsSum.findIndex(board => board.board === match.board)].sum -= match.number;
      const foundRow : number = hits.findIndex(hit => hit.id === `r${match.row}x${match.board}`);
      const foundColumn : number = hits.findIndex(hit => hit.id === `c${match.column}x${match.board}`);
      answersLogic(foundRow, match, `r${match.row}x${match.board}`, unmarkedBoardSum);
      answersLogic(foundColumn, match, `c${match.column}x${match.board}`, unmarkedBoardSum);
  })  
})

console.log("solution one: ", solutionOne);
console.log("solution two: ", solutionTwo);