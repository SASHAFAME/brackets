module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const identicalBrackets = [];
  const bracketsPairs = {};

  bracketsConfig.forEach(arr => {
    openBrackets.push(arr[0]);
    bracketsPairs[arr[1]] = arr[0];
    if(arr[0] === arr[1]) {
      identicalBrackets.push(arr[0])
    }
  });

  const stack = [];

  for (const currentChar of str) {
    const topStackEl = stack[stack.length - 1];

    if(identicalBrackets.includes(currentChar) && stack.includes(currentChar)) {
      if(currentChar === topStackEl) {
        stack.pop(currentChar);
      } else {
        return false;
      }
    } else if(openBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else {
      if(stack.length === 0) {
        return false;
      }

      if(bracketsPairs[currentChar] === topStackEl) {
        stack.pop(currentChar);
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}