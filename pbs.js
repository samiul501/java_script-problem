function reverseText(text) {
  let reversed = [];

  for (let i = text.length - 1; i >= 0; i--) {
    reversed.push(text[i]);
  }

  let result = "";
  for (let i = 0; i < reversed.length; i++) {
    result += reversed[i];
  }

  return result;
}

console.log(reverseText("Hello")); 
