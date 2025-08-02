function reverseNumber(num) {
  let reversedDigits = [];

  
  while (num > 0) {
    let digit = num % 10;         
    reversedDigits.push(digit);  
    num = Math.floor(num / 10);   
  }


  let reversedNumber = 0;

  for (let i = 0; i < reversedDigits.length; i++) {
    reversedNumber = reversedNumber * 10 + reversedDigits[i];
  }

  return reversedNumber;
}

console.log(reverseNumber(12345));