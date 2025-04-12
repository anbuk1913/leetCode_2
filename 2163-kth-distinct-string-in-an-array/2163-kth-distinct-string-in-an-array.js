/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let ans = []
    for(let i=0;i<arr.length;i++){
        let count = 1
        for(let j=0;j<arr.length;j++){
            if(i==j){
                continue
            }
            else if(arr[i]==arr[j]){
                count++
            }
            if(count>1){
                break
            }
        }
        if(count==1){
            ans.push(arr[i])
        }
    }
    if(ans.length>=k){
        return ans[k-1]
    } else {
        return ""
    }
};