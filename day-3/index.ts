import fs from "fs";

const input : string[] = fs.readFileSync('./input.txt','utf8').split(/\r?\n/);

const solutionOne = () : number => {
  const power : { gamma: string, epsilon: string }= { gamma: '', epsilon: '' }
  for (let i = 0; i < input[0].length; i++) {
    let ones : string[] = input.filter(line => line.split('')[i] === '1');
    power.gamma += ones.length >= (input.length / 2) ? '1' : '0';
    power.epsilon += ones.length >= (input.length / 2) ? '0' : '1';
  }
  return parseInt(power.gamma, 2) * parseInt(power.epsilon, 2);
}

const solutionTwo = () : number => {
  const lifeSupport : { oxygenGeneratorArray: string[], co2ScrubberRatingsArray : string[] } = {
    oxygenGeneratorArray: input,
    co2ScrubberRatingsArray:  input
  }
  for (let i = 0; i < input[0].length; i++) {
    let oxArrayOnes : string[] = lifeSupport.oxygenGeneratorArray.filter(line => line.split('')[i] === '1');
    lifeSupport.oxygenGeneratorArray = oxArrayOnes.length >= (lifeSupport.oxygenGeneratorArray.length / 2) ? oxArrayOnes : lifeSupport.oxygenGeneratorArray.filter(line => line.split('')[i] === '0');

    let co2ArrayOnes : string[] = lifeSupport.co2ScrubberRatingsArray.filter(line => line.split('')[i] === '1');
    
    if (lifeSupport.co2ScrubberRatingsArray.length !== 1) {
      lifeSupport.co2ScrubberRatingsArray = co2ArrayOnes.length >= (lifeSupport.co2ScrubberRatingsArray.length / 2) ? lifeSupport.co2ScrubberRatingsArray.filter(line => line.split('')[i] === '0') : co2ArrayOnes;
    } 
  }
  return parseInt(lifeSupport.oxygenGeneratorArray[0], 2) * parseInt(lifeSupport.co2ScrubberRatingsArray[0], 2);
}

const solutionOneAnswer = solutionOne();
const solutionTwoAnswer = solutionTwo();

console.log(solutionOneAnswer, solutionTwoAnswer);