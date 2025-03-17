/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let t=0
    for(let i=0;i<arr2.length;i++){
        for(let j=t;j<arr1.length;j++){
            if(arr1[j]==arr2[i]){
                for(let  k=j;k>t;k--){
                    let tem = arr1[k]
                    arr1[k] = arr1[k-1]
                    arr1[k-1] = tem
                }
                t++
            }
        }
    }
    for(let i=t;i<arr1.length;i++){
        for(let j=i+1;j<arr1.length;j++){
            if(arr1[i]>arr1[j]){
                let tem = arr1[i]
                arr1[i] = arr1[j]
                arr1[j] = tem
            }
        }
    }
    return arr1
};