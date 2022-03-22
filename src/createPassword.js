export function createPassword(passwordLength, wantSymbols, wantUppercase, wantNumbers){
    var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "+", "=", "-", "_", "?"]
    var possibleCharacter = lettersLower
    console.log(wantSymbols, wantUppercase, wantNumbers);
    if(wantSymbols){
        possibleCharacter.push(...symbols)
    }
    if(wantUppercase){
        possibleCharacter.push(...lettersUpper)
    }
    if(wantNumbers){
        possibleCharacter.push(...numbers)
    }

    var randomCharacterList = []

    for (let i = 0; i < passwordLength; i++) {
        var r = getRandomInt(0, possibleCharacter.length)
        randomCharacterList.push(possibleCharacter[r])
    }

    return randomCharacterList.join("");
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}