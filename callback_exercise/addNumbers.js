const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }
  if (numsLeft > 0){
    reader.question("what's your number", function(answer){
      const num = parseInt(answer);
      sum += num;
      console.log(sum);
      numsLeft = numsLeft - 1;
      return addNumbers(sum, numsLeft, completionCallback);
    })
  };
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));