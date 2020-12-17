var censoredWords = ['bad', 'mad', 'sad'];
var customCensoredWords = [];

function censor(inStr) {
  for (id in censoredWords) {
    inStr = inStr.replace(censoredWords[id], "****");
  }
  for (id in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[id], "****");
  }
}

function getCensoredWords() {
  return censoredWords.concat(customCensoredWords);
}

function addCensoredWords(word) {
  customCensoredWords.push(word);
}

exports.censor = censor
exports.getCensoredWords = getCensoredWords
exports.addCensoredWords = addCensoredWords
