/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort()
    let wordSet = new Set()
    let long = ""
    for (let word of words) {
        if (word.length == 1 || wordSet.has(word.slice(0, word.length - 1))) {
            wordSet.add(word)
            if (
                word.length > long.length ||
                (word.length == long.length && word < long)
            ) {
                long = word
            }
        }
    }
    return long
};