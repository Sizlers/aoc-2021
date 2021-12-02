import fs from "fs";

fs.readFile('./input.txt', 'utf8', (err, input) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solutionOne(input))
  console.log(solutionTwo(input))
})

const solutionOne = (input: string): number => {
  const coords: { x: number, y: number } = {
    x: 0,
    y: 0
  }
  input.split(/\r?\n/).forEach((line) => {
    if (line.includes('forward')) coords.x += parseInt(line.replace('forward', ''));
    if (line.includes('up')) coords.y -= parseInt(line.replace('up', ''));
    if (line.includes('down')) coords.y += parseInt(line.replace('down', ''));
  })
  return coords.x * coords.y;
}

const solutionTwo = (input: string): number => {
  const coords: { x: number, y: number, aim: number } = {
    x: 0,
    y: 0,
    aim: 0
  }
  input.split(/\r?\n/).forEach((line) => {
    if (line.includes('forward')) {
      coords.x += parseInt(line.replace('forward', ''))
      coords.y += parseInt(line.replace('forward', '')) * coords.aim
    }
    if (line.includes('up')) coords.aim -= parseInt(line.replace('up', ''));
    if (line.includes('down')) coords.aim += parseInt(line.replace('down', ''));
  })
  return coords.x * coords.y;
}
