import fs from "fs";

fs.readFile('./input.txt', 'utf8' , (err, input) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solutionOne(input))
  console.log(solutionTwo(input))
})
 
const solutionOne = (input: string) : number => input.split(/\r?\n/).filter((line, i, array) => i !== 0 && parseInt(line) > parseInt(array[i - 1])).length;

const solutionTwo = (input: string) : number => input.split(/\r?\n/).filter((line, i, array) => i !== 0 && parseInt(array[i + 1]) > parseInt(array[i - 2])).length;

