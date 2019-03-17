function getUniqueLetters(first, second) {
  // Only change code below this line
  var newStr = '';
  var main = first.concat(second);
  var find = main.toLowerCase();
  for (var i = 0; i < find.length; i++) {
    if (find.lastIndexOf(find[i]) == find.indexOf(find[i])) {
      newStr += find[i];
    }
  }
  return newStr;
  // Only change code above this line
}


// Tests
test(getUniqueLetters('aBcdef', 'CdEfgh'), 'abgh');
test(getUniqueLetters('aAAaabBb', 'ab'), '');
test(getUniqueLetters('Happy New Year', 'nyh'), 'apewr');

function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: "${actual}" is not equal to expected "${expected}"`;
    console.error(errorMessage);  
  } else {
    console.log(`Test ${testName} passed!`);
  }
}