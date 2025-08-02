const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(str) {
  const result = str.replace(/[.,!@#$%^&,*()]/g, '');
  console.log("Output:", result);
  rl.close();
});
