/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let ans = 0
    for(let i=1;i<=n;i++){
        if(i%m){
            ans+=i
        } else {
            ans-=i
        }
    }
    return ans
};