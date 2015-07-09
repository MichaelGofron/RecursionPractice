var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  var strArr = string.split("");
  var strObj = {};

  for (var i = 0; i < strArr.length; i++){
    var letter = strArr[i];
    if (strObj[letter]){
      strObj[letter] = false; 
    }
    if (strObj[letter] === undefined){
      strObj[letter] = true;
    }
  }

  for (var i = 0; i < strArr.length; i++){
    var letter = strArr[i];
    if (strObj[letter]){
      return letter;
    }
  }
  return undefined;


};

// go through list,
// when you find a character scan the rest of the list to see if the rest of the list has the character
// if it does return that char
// else continue

console.log(firstNonRepeatedCharacter("ABA"));
console.log(firstNonRepeatedCharacter('AACBDB'));