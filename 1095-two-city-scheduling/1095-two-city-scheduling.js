/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let arr = []
    for(let i=0;i<costs.length;i++){
        arr.push(costs[i][0]-costs[i][1])
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
                let tem = costs[i]
                costs[i] = costs[j]
                costs[j] = tem
            }
        }
    }
    let ans = 0
    for(let i=0;i<arr.length;i++){
        if(i<arr.length/2){
            ans+=costs[i][0]
        } else {
            ans+=costs[i][1]
        }
    }
    return ans
};