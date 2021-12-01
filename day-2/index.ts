import fs from "fs";

fs.readFile('./input.txt', 'utf8' , (err, input) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solutionOne(input))
  console.log(solutionTwo(input))
})
 
const solutionOne = (input: string) => {
return 'no return set';
}

const solutionTwo = (input: string) => {
  return 'no return set';
}

