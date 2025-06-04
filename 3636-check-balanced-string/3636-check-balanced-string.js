/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let odd = 0
    let eve = 0
    for(let i=0;i<num.length;i++){
        if(i%2){
            odd+=Number(num[i])
        } else {
            eve+=Number(num[i])
        }
    }
    return odd===eve
};