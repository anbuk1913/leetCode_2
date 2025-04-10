/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let arr = [...new Set([...nums])]
    arr.sort((a,b)=>a-b)
    let max = 0
    let tem = 1
    if(arr.length==0)return 0
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]==arr[i]-1){
            tem++
        } else {
            if(max<tem){
                max=tem
            }
            tem=1
        }
    }
    if(max<tem) return tem
    return max
};