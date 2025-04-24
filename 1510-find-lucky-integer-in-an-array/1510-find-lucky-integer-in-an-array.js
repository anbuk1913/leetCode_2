/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let fre = new Array(arr.length).fill(-1)
    for(let i=0;i<arr.length;i++){
        let count = 1
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++
                fre[j] = 0
            }
        }
        if(fre[i]!=0){
            fre[i] = count
        }
    }
    let max = -1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==fre[i] && max<arr[i]){
            max = arr[i]
        }
    }
    return max
};