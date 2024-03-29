function getFirstCharacter(input) {
  return input.charAt(0);
}


// Tests
test(getFirstCharacter('a'), 'a', 'singleLowercaseCharacterString');
test(getFirstCharacter('A'), 'A', 'singleUpperCharacterString');
test(getFirstCharacter('123'), '1', 'digitsString');
test(getFirstCharacter('asdf'), 'a', 'multiCharacterString');
test(getFirstCharacter('!@#$'), '!', 'specialSymbolsString');

function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);  
  } else {
    console.log(`Test ${testName} passed!`);
  }
  
}