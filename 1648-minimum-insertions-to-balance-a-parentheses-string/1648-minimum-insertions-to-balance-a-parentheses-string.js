/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let ins = 0
    let left = 0
    let t = 0
    while (t < s.length) {
        if (s[t] === '(') {
            if (left % 2 !== 0) {
                ins++
                left--
            }
            left += 2
            t++
        } else {
            left--
            if (left < 0) {
                ins++
                left = 1
            }
            t++;
        }
    }
    return ins + left
};